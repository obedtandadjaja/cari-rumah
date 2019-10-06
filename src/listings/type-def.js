export default `
  type Listing implements Node {
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
      pagination: PaginationInput
    ): ListingConnection
    listingsByUserId(user_id: ID!): [Listing]
    listingsByAddressLatLongRectangle(
      ne: Coordinate!,
      sw: Coordinate!,
      sortBy: ListingSortBy,
      sortDirection: SortDirection,
      pagination: PaginationInput,
      filter: ListingFilter
    ): ListingConnection
  }

  type ListingConnection {
    edges: [ListingEdge]
    pageInfo: PageInfo!
  }

  type ListingEdge {
    node: Listing
    cursor: String!
  }

  type Mutation {
    createListing(listing: ListingInput): Listing!
    updateListing(listing: ListingInput): Boolean!
  }

  input ListingInput {
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
  }

  input ListingFilter {
    price_idr_min: Int
    price_idr_max: Int
    num_bedrooms_min: Float
    num_bedrooms_max: Float
    num_bathrooms_min: Float
    num_bathrooms_max: Float
    year_built_min: Float
    year_built_max: Float
    residential_type: String
    type: String
  }
`
