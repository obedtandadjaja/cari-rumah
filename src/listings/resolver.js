import Listing from './Listing'
import Address from './../addresses/Address'
import User from './../users/User'

export default {
  Query: {
    listing: async(root, { id }, context) => await Listing.findById(id),

    listingByAddress: async(root, { address_id }, context) => await Listing.findByAddress(address_id),

    listingsByAddresses: async(root, { address_ids }, context) => await Listing.whereByAddresses(address_ids),

    listingsByAddressLatLongDistance: async(root, { lat, long, distance, sortBy, sortDirection }, context) => {
      let result = await Address.whereByLatLongDistance(lat, long, distance)
        .then(async(addresses) => {
          return await Promise.all(
            addresses.map(async(address) => {
              return await Listing.findByAddress(address.id)
                .then(res => {
                  res.address = address
                  return res
                })
                .catch(err => null)
            })
          ).then(listings => listings.filter(listing => listing != null))
        })
      return result
    },

    listingsByUserId: async(root, { user_id }, context) => await Listing.whereByUserId(user_id),
  },
  Mutation: {
    createListing: async(root, args, context) => await Listing.create(args),

    updateListing: async(root, args, context) => await Listing.update(args),
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
  }
}
