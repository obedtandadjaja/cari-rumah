import Address from './Address'

export default {
  address: ({ id }) => Address.findById(id),
  addressByRegion: ({ region }) => Address.whereByRegion(region),
  addressByCity: ({ city }) => Address.whereByCity(city),
  addressByZipCode: ({ zip_code }) => Address.whereByZipCode(zip_code),
  addressByLongLat: ({ long, lat }) => Address.findByLongLat(long, lat),
  addressByLongLatDistance: ({ long, lat, distance }) => Address.whereByLongLatDistance(long, lat, distance),
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
  }) => Address.update(id, address_1, address_2, city, region, zip_code, country)
}
