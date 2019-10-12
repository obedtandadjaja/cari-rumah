import Address from './Address'

export default {
  Query: {
    address: async(root, { id }, context) => await Address.findById(id),
    addressesByZipCode: async(root, { zip_code }, context) => await Address.whereByZipCode(zip_code),
    addressesByLatLongDistance: async(root, { lat, long, distance }, context) => await Address.whereByLatLongDistance(lat, long, distance),
    addressesByLatLongRectangle: async(root, args, context) => await Address.whereByLatLongRectangle(args)
  },
  Mutation: {
    createAddress: async(root, args, context) => await Address.create(args),
    updateAddress: async(root, args, context) => await Address.update(args),
  },
  Address: {
    full_address: (root, args, context) => {
      const address = root.address_2 ? `${root.address_1} ${root.address_2}` : root.address_1
      let addressComponents = [
        address,
        root.administrative_area_level_4,
        root.administrative_area_level_3,
        root.administrative_area_level_2,
        root.administrative_area_level_1,
        root.zip_code
      ]
      addressComponents.filter(component => !component)

      return addressComponents.join(', ')
    }
  }
}
