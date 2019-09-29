import Address from './Address'

export default {
  Query: {
    address: async(root, { id }, context) => await Address.findById(id),
    addressesByProvince: async(root, { province }, context) => await Address.whereByProvince(province),
    addressesByCity: async(root, { city }, context) => await Address.whereByCity(city),
    addressesByZipCode: async(root, { zip_code }, context) => await Address.whereByZipCode(zip_code),
    addressesByLatLongDistance: async(root, { lat, long, distance }, context) => await Address.whereByLatLongDistance(lat, long, distance),
    addressesByLatLongRectange: async(root, args, context) => await Address.whereByLatLongRectangle(args)
  },
  Mutation: {
    createAddress: async(root, args, context) => await Address.create(args),
    updateAddress: async(root, args, context) => await Address.update(args),
  },
  Address: {
    full_address: (root, args, context) => {
      return `${root.address_1} ${root.address_2}, ${root.city}, ${root.province} ${root.zip_code}`
    }
  }
}
