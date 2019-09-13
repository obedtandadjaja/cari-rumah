import Address from './Address'

export default {
  Query: {
    address: async(root, { id }, context) => await Address.findById(id),
    addressesByRegion: async(root, { region }, context) => await Address.whereByRegion(region),
    addressesByCity: async(root, { city }, context) => await Address.whereByCity(city),
    addressesByZipCode: async(root, { zip_code }, context) => await Address.whereByZipCode(zip_code),
    addressesByLatLongDistance: async(root, { lat, long, distance }, context) => await Address.whereByLatLongDistance(lat, long, distance),
  },
  Mutation: {
    createAddress: async(
      root,
      {
        address_1,
        address_2,
        city,
        region,
        zip_code,
        country
      },
      context
    ) => await Address.create(address_1, address_2, city, region, zip_code, country),
    updateAddress: async(
      root,
      {
        id,
        address_1,
        address_2,
        city,
        region,
        zip_code,
        country
      },
      context
    ) => await Address.update(id, address_1, address_2, city, region, zip_code, country),
  },
  Address: {}
}
