import Listing from './Listing'
import Address from './../addresses/Address'
import User from './../users/User'

export default {
  Query: {
    listing: async(root, { id }, context) => await Listing.findById(id),
    listingByAddress: async(root, { address_id }, context) => await Listing.findByAddress(address_id),
    listingsByAddresses: async(root, { address_ids }, context) => await Listing.whereByAddresses(address_ids),
    listingsByUserId: async(root, { user_id }, context) => await Listing.whereByUserId(user_id),
  },
  Mutation: {
    createListing: async(
      root,
      {
        user_id,
        address_id,
        num_bedrooms,
        num_bathrooms,
        num_parking_lots,
        num_stories,
        lot_size_sqft,
        year_built,
        price_cents,
        price_currency,
        description,
        display_picture_url,
        picture_urls,
        residential_type,
        type
      },
      context) => await Listing.create(
      user_id, address_id, num_bedrooms, num_bathrooms, num_parking_lots, num_stories, lot_size_sqft,
      year_built, price_cents, price_currency, description, display_picture_url, picture_urls, residential_type,
      type
    ),
    updateListing: async(
      root,
      {
        id,
        user_id,
        address_id,
        num_bedrooms,
        num_bathrooms,
        num_parking_lots,
        num_stories,
        lot_size_sqft,
        year_built,
        price_cents,
        price_currency,
        description,
        display_picture_url,
        picture_urls,
        residential_type,
        type
      },
      context
    ) => await Listing.update(
      id, user_id, address_id, num_bedrooms, num_bathrooms, num_parking_lots, num_stories, lot_size_sqft,
      year_built, price_cents, price_currency, description, display_picture_url, picture_urls, residential_type,
      type
    ),
  },
  Listing: {
    address: async(root, args, context) => await Address.findById(root.address_id),
    user: async(root, args, context) => await User.findById(root.user_id)
  }
}
