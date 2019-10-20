import { User } from './User'
import Listing from './../listings/Listing'
import AuthClient from './../auth/client'

export default {
  Query: {
    user: async(root, { id }, context) => await User.findById(id),

    users: async(root, args, context) => await User.all(),
  },
  Mutation: {
    createUser: async(root, args, context) => {
      return await AuthClient.createCredential(args.password)
        .then(res => {
          return User.create({ ...args, credential_id: res.data.credential_id })
        })
    },

    saveListing: async(root, { user_id, listing_id }, context) => {
      return await User.saveListing(listing_id, user_id).then(res => true)
    },
  },
  User: {
    listings: async(root, args, context) => {
      if (root.listings)
        return root.listings

      return await Listing.whereByUserId(root.id)
    },

    saved_listings: async(root, args, context) => {
      if (!root.saved_listings.some(isNaN))
        return await Listing.whereByIds(saved_listings)

      return root.saved_listings
    }
  },
}
