import Address from './Address'

export default {
  // Query
  address: ({ id }) => Address.findOne(id),
  addressByRegion: ({ region }) => Address.whereByRegion(region),
  addressByCity: ({ city }) => Address.whereByCity(city),
  addressByZipCode: ({ zip_code }) => Address.whereByZipCode(zip_code),
  addressByLongLat: ({ long, lat }) => Address.findByLongLat(long, lat),

  // Mutation
  createAddress: (
    address_1,
    address_2,
    city,
    region,
    zip_code,
    country
  ) => Address.create(address_1, address_2, city, region, zip_code, country),

  updateAddress: (
    id,
    address_1,
    address_2,
    city,
    region,
    zip_code,
    country
  ) => Address.update(id, address_1, address_2, city, region, zip_code, country)
}
