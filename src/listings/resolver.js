import Listing from './Listing'

export default {
  listing: ({ id }) => Listing.findById(id),
  listingByAddress: ({ address_id }) => Listing.findByAddress(address_id),
  listingsByAddresses: ({ address_ids }) => Listing.whereByAddresses(address_ids),
  listingsByUserId: ({ user_id }) => Listing.whereByUserId(user_id),
  createListing: ({
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
  }) => Listing.create(
    user_id, address_id, num_bedrooms, num_bathrooms, num_parking_lots, num_stories, lot_size_sqft,
    year_built, price_cents, price_currency, description, display_picture_url, residential_type, type
  ),
  updateListing: ({
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
  }) => Listing.update(
    id, user_id, address_id, num_bedrooms, num_bathrooms, num_parking_lots, num_stories, lot_size_sqft,
    year_built, price_cents, price_currency, description, display_picture_url, residential_type, type
  )
}
