import Address from './Address'

export default {
  Query: {
    address: ({ id }) => Address.findById(id),
    addressesByRegion: ({ region }) => Address.whereByRegion(region),
    addressesByCity: ({ city }) => Address.whereByCity(city),
    addressesByZipCode: ({ zip_code }) => Address.whereByZipCode(zip_code),
    addressesByLongLatDistance: ({ long, lat, distance }) => Address.whereByLongLatDistance(long, lat, distance),
  },
  Mutation: {
    createAddress: ({
      address_1,
      address_2,
      city,
      region,
      zip_code,
      country
    }) => Address.create(address_1, address_2, city, region, zip_code, country),
    updateAddress: ({
      id,
      address_1,
      address_2,
      city,
      region,
      zip_code,
      country
    }) => Address.update(id, address_1, address_2, city, region, zip_code, country),
  },
  Address: {}
}
