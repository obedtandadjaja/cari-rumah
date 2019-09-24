import db from './../pg-adaptor'
import getGeocode from './../google/maps/geocoding'
import getTimezone from './../google/maps/timezone'

const defaultOptions = {
  connection: db,
  sortBy: 'id',
  sortDirection: 'asc'
}

class Address {
  static findById(id, options=defaultOptions) {
    return options.connection.one(`select * from addresses where id=$1`, [id])
  }

  static whereByProvince(province, options=defaultOptions) {
    return options.connection.any(`select * from addresses where province=$1`, [province])
  }

  static whereByCity(city, options=defaultOptions) {
    return options.connection.any(`select * from addresses where city=$1`, [city])
  }

  static whereByZipCode(zipCode, options=defaultOptions) {
    return options.connection.any(`select * from addresses where zip_code=$1`, [zipCode])
  }

  static whereByLatLongDistance(lat, long, distanceInMiles, options=defaultOptions) {
    return options.connection.any(
      `select * from addresses
      where (point(latitude, longitude)::point <@> point($1, $2)) <= $3`,
      [lat, long, distanceInMiles]
    )
  }

  static create(args, options=defaultOptions) {
    return getGeocode(args.address_1, args.address_2, args.city, args.province, args.zip_code, args.country)
      .then((loc) => {
        return getTimezone(loc.lat, loc.lng).then(res => [res, loc])
      })
      .then((res) => {
        const [timezone, location] = res
        return options.connection.one(
          `insert into addresses (address_1, address_2, city, province, zip_code, country, longitude, latitude, timezone)
           values (${address_1}, ${address_2}, ${city}, ${province}, ${zip_code}, ${country}, ${location.lng}, ${location.lat}, ${timezone}) returning id`,
          {...args, timezone, location}
        )
      })
  }

  static update(args, options=defaultOptions) {
    return options.connection.none(
      `update addresses set
       address_1 = coalesce(${address_1}, address_1),
       address_2 = coalesce(${address_2}, address_2),
       city = coalesce(${city}, city),
       province = coalesce(${province}, province),
       zip_code = coalesce($5, zip_code),
       country = coalesce($6, country)
       where id = $7`,
      args
    )
      .then(res => this.findById(id))
      .then(address => {
        return getGeocode(
          address.address_1,
          address.address_2,
          address.city,
          address.province,
          address.zip_code,
          address.country
        )
      })
      .then(loc => {
        return getTimezone(loc.lat, loc.long).then(res => [res, loc])
      })
      .then(res => {
        let timezone = res[0]
        let location = res[1]

        return options.connection.none(
          `update addresses set longitude = $1, latitude = $2, timezone = $3 where id = $4`,
          [location.lng, location.lat, timezone, id]
        )
      })
  }
}

export default Address
