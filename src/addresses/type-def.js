export default `
  type Address {
    id: ID!
    address_1: String
    address_2: String
    city: String
    administrative_area_level_1: String
    administrative_area_level_2: String
    administrative_area_level_3: String
    administrative_area_level_4: String
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
    addressesByLatLongRectangle(ne: Coordinate!, sw: Coordinate!): [Address]
  }

  type Mutation {
    createAddress(address: AddressInput): Address!
    updateAddress(address: AddressInput): Boolean!
  }

  input AddressInput {
    id: ID
    address_1: String
    address_2: String
    city: String
    administrative_area_level_1: String
    administrative_area_level_2: String
    administrative_area_level_3: String
    administrative_area_level_4: String
    zip_code: String
    country: String
    longitude: Float
    latitude: Float
  }
`
