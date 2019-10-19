import User from './User'
import Listing from './../listings/Listing'

export default {
  Query: {
    user: async(root, { id }, context) => await User.findById(id),

    users: async(root, args, context) => await User.all(),
  },
  Mutation: {
    createUser: async(root, args, context) => await User.create(args),
    saveListing: async(root, { user_id, listing_id }, context) => {
      await User.saveListing(listing_id, user_id).then(res => true)
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
