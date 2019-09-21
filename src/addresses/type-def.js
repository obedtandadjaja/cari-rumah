export default `
  type Address {
    id: ID!
    address_1: String
    address_2: String
    city: String
    province: String
    zip_code: String
    country: String
    longitude: Float
    latitude: Float
    timezone: String
    full_address: String
  }

  type Query {
    address(id: ID!): Address
    addressesByProvince(province: String): [Address]
    addressesByCity(city: String): [Address]
    addressesByZipCode(zip_code: String): [Address]
    addressesByLatLongDistance(lat: Float, long: Float, distance: Float): [Address]
  }

  type Mutation {
    createAddress(
      address_1: String!,
      address_2: String,
      city: String!,
      province: String!,
      zip_code: String,
      country: String!
    ): Address
    updateAddress(
      id: ID!,
      address_1: String,
      address_2: String,
      city: String,
      province: String,
      zip_code: String,
      country: String
    ): Boolean
  }
`
