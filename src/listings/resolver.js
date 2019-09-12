import Listing from './Listing'
import Address from './../addresses/Address'
import logger from './../logger'

export default {
  Query: {
    listing: async({ id }) => await Listing.findById(id),
    listingByAddress: async({ address_id }) => await Listing.findByAddress(address_id),
    listingsByAddresses: async({ address_ids }) => await Listing.whereByAddresses(address_ids),
    listingsByUserId: async({ user_id }) => await Listing.whereByUserId(user_id),
  },
  Mutation: {
    createListing: async({
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
      residential_type,
      type
    }) => await Listing.create(
      user_id, address_id, num_bedrooms, num_bathrooms, num_parking_lots, num_stories, lot_size_sqft,
      year_built, price_cents, price_currency, description, display_picture_url, residential_type, type
    ),
    updateListing: async({
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
      residential_type,
      type
    }) => await Listing.update(
      id, user_id, address_id, num_bedrooms, num_bathrooms, num_parking_lots, num_stories, lot_size_sqft,
      year_built, price_cents, price_currency, description, display_picture_url, residential_type, type
    ),
  },
  Listing: {
    address: (root, args, context) => {
      return { address_id: 1 }
    }
  }
}
