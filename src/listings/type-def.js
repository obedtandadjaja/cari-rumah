export default `
  type Listing {
    id: ID!
    user_id: ID
    address_id: ID
    num_bedrooms: Float
    num_bathrooms: Float
    num_parking_spots: Float
    lot_size_m2: Float
    num_stories: Float
    year_built: Int
    price_idr: Int
    description: String
    display_picture_url: String
    residential_type: String
    type: String
    address: Address
    user: User
    pagination: Pagination
  }

  enum ListingSortBy {
    price
    distance
    createdAt
  }

  type Query {
    listing(id: ID!): Listing
    listingByAddress(address_id: ID!): Listing
    listingsByAddresses(address_ids: [ID]): [Listing]
    listingsByAddressLatLongDistance(
      lat: Float!,
      long: Float!,
      distance: Float!,
      sortBy: ListingSortBy,
      sortDirection: SortDirection,
      batchSize: Int,
      before: String,
      after: String
    ): [Listing]
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
      lot_size_m2: Float,
      year_built: Int,
      price_idr: Int,
      description: String,
      display_picture_url: String,
      residential_type: String,
      type: String
    ): Listing
    updateListing(
      id: ID!
      user_id: ID,
      address_id: ID,
      num_bedrooms: Float,
      num_bathrooms: Float,
      num_parking_lots: Float,
      num_stories: Float,
      lot_size_m2: Float,
      year_built: Int,
      price_idr: Int,
      description: String,
      display_picture_url: String,
      residential_type: String,
      type: String
    ): Boolean
  }
`
