import db from './../pg-adaptor'
import { listingDefaultOptions, Listing } from './Listing'
import { addressDefaultOptions, Address } from './../addresses/Address'
import { userDefaultOptions, User } from './../users/User'
import { encodeCursor, decodeCursor } from './../common/cursorHelper'

export default {
  Query: {
    listing: async(root, { id }, context) => await Listing.findById(id),

    listingByAddress: async(root, { address_id }, context) => await Listing.findByAddress(address_id),

    listingsByAddresses: async(root, { address_ids }, context) => await Listing.whereByAddresses(address_ids),

    listingsByAddressLatLongDistance: async(root, args, context) => {
      context.batchSize = (args.pagination.batchSize || listingDefaultOptions.batchSize)
      context.sortBy = (args.sortBy || listingDefaultOptions.sortBy)

      // pg-promise task helps pools multiple queries to one db connection
      return await db.task(task => {
        return Address.whereByLatLongRectangle(args.lat, args.long, args.distance, {connection: task})
          .then(addresses => {
            return Listing.whereByAddressIds(
              addresses.map(address => address.id),
              {
                connection: task,
                sortBy: args.sortBy || listingDefaultOptions.sortBy,
                sortDirection: args.sortDirection || listingDefaultOptions.sortDirection,
                // get one more from the DB to determine if there is a nextPage
                batchSize: args.pagination.batchSize + 1,
                after: decodeCursor(args.pagination.after)
              }
            )
              .then(listings => {
                return { addresses, listings }
              })
              .catch(err => {
                return { addresses: [], listings: [] }
              })
          })
      }).then(data => {
        let { addresses, listings } = data
        let addressIdToObjectMap = {}

        addresses.map(address => addressIdToObjectMap[address.id] = address)
        listings.map(listing => listing.address = addressIdToObjectMap[listing.address_id])

        return listings
      })
    },

    listingsByUserId: async(root, { user_id }, context) => await Listing.whereByUserId(user_id),

    listingsByAddressLatLongRectangle: async(root, args, context) => {
      context.batchSize = (args.pagination.batchSize || listingDefaultOptions.batchSize)
      context.sortBy = (args.sortBy || listingDefaultOptions.sortBy)

      // pg-promise task helps pools multiple queries to one db connection
      return await db.task(task => {
        return Address.whereByLatLongRectangle(args, {connection: task})
          .then(addresses => {
            return Listing.whereByAddressIds(
              addresses.map(address => address.id),
              {
                connection: task,
                sortBy: args.sortBy || listingDefaultOptions.sortBy,
                sortDirection: args.sortDirection || listingDefaultOptions.sortDirection,
                // get one more from the DB to determine if there is a nextPage
                batchSize: args.pagination.batchSize + 1,
                after: decodeCursor(args.pagination.after)
              }
            )
              .then(listings => {
                return { addresses, listings }
              })
              .catch(err => {
                return { addresses: [], listings: [] }
              })
          })
      }).then(data => {
        let { addresses, listings } = data
        let addressIdToObjectMap = {}

        addresses.map(address => addressIdToObjectMap[address.id] = address)
        listings.map(listing => listing.address = addressIdToObjectMap[listing.address_id])

        return listings
      })
    },
  },

  Mutation: {
    createListing: async(root, { listing }, context) => await Listing.create(listing),

    updateListing: async(root, { listing }, context) => await Listing.update(listing),
  },

  Listing: {
    address: async(root, args, context) => {
      if (root.address)
        return root.address

      return await Address.findById(root.address_id)
    },

    user: async(root, args, context) => {
      if (root.user)
        return root.user

      await User.findById(root.user_id)
    }
  },

  ListingConnection: {
    edges: async(root, args, context) => {
      return root.slice(0, context.batchSize)
    },

    pageInfo: async(root, args, context) => {
      let endCursor = null

      if (root.length > context.batchSize) {
        endCursor = encodeCursor({
          column: context.sortBy,
          value: root[context.batchSize - 1][context.sortBy]
        })
      }

      return { endCursor: endCursor }
    }
  },

  ListingEdge: {
    node: async(root, args, context) => root,

    cursor: async(root, args, context) => {
      return encodeCursor({
        column: context.sortBy,
        value: root[context.sortBy]
      })
    }
  }
}
