export default `
  type Address {
    id: ID!
    address_1: String
    address_2: String
    city: String
    region: String
    zip_code: String
    country: String
    longitude: Float
    latitude: Float
    timezone: String
  }

  type Query {
    address(id: ID!): Address
    addressByRegion(region: String): [Address]
    addressByCity(city: String): [Address]
    addressByZipCode(zip_code: String): [Address]
    addressByLongLat(long: Float, lat: Float): Address
  }

  type Mutation {
    createAddress(
      address_1: String!,
      address_2: String,
      city: String!,
      region: String!,
      zip_code: String,
      country: String!
    )
    updateAddress(
      id: ID!,
      address_1: String,
      address_2: String,
      city: String,
      region: String,
      zip_code: String,
      country: String
    )
  }
`
