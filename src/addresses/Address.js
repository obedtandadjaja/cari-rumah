import db from './../pg-adaptor'
import getGeocode from './../google/maps/geocoding'
import getTimezone from './../google/maps/timezone'

class Address {
  static findById(id) {
    return db.one(`select * from addresses where id=$1`, [id])
  }

  static whereByProvince(province) {
    return db.any(`select * from addresses where province=$1`, [province])
  }

  static whereByCity(city) {
    return db.any(`select * from addresses where city=$1`, [city])
  }

  static whereByZipCode(zip_code) {
    return db.any(`select * from addresses where zip_code=$1`, [zip_code])
  }

  static whereByLatLongDistance(lat, long, distanceInMiles) {
    return db.any(
      `select * from addresses
      where (point(latitude, longitude)::point <@> point($1, $2)) <= $3`,
      [lat, long, distanceInMiles]
    )
  }

  static create(args) {
    return getGeocode(address_1, address_2, city, province, zip_code, country)
      .then((loc) => {
        return getTimezone(loc.lat, loc.lng).then(res => [res, loc])
      })
      .then((res) => {
        const [timezone, location] = res
        return db.one(
          `insert into addresses (address_1, address_2, city, province, zip_code, country, longitude, latitude, timezone)
       values (${address_1}, ${address_2}, ${city}, ${province}, ${zip_code}, ${country}, ${location.lng}, ${location.lat}, ${timezone}) returning id`,
          {...args, timezone, location}
      })
  }

  static update(args) {
    return db.none(
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

        return db.none(
          `update addresses set longitude = $1, latitude = $2, timezone = $3 where id = $4`,
          [location.lng, location.lat, timezone, id]
        )
      })
      .then(res => true)
  }
}

export default Address
