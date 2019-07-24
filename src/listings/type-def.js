export default `
  type Listing {
    id: ID!
    user_id: ID
    address_id: ID
    num_bedrooms: Float
    num_bathrooms: Float
    num_parking_spots: Float
    lot_size_sqft: Float
    num_stories: Float
    year_built: Int
    price_cents: Int
    price_currency: String
    description: String
    display_picture_url: String
    residential_type: String
    type: String
  }

  type Query {
    listing(id: ID!): Listing
    listingByAddress(address_id: ID!): Listing
    listingsByAddresses(address_ids: [ID]): [Listing]
    listingsByUserId(user_id: ID!): [Listing]
  }

  type Mutation {
    createListing(
      user_id: ID!,
      address_id: ID!,
      num_bedrooms: Float,
      num_bathrooms: Float,
      num_parking_lots: Float,
      num_stories: Float,
      lot_size_sqft: Float,
      year_built: Int,
      price_cents: Int,
      price_currency: String,
      description: String,
      display_picture_url: String,
      residential_type: String,
      type: String
    )
    updateListing(
      id: ID!
      user_id: ID,
      address_id: ID,
      num_bedrooms: Float,
      num_bathrooms: Float,
      num_parking_lots: Float,
      num_stories: Float,
      lot_size_sqft: Float,
      year_built: Int,
      price_cents: Int,
      price_currency: String,
      description: String,
      display_picture_url: String,
      residential_type: String,
      type: String
    )
  }
`
