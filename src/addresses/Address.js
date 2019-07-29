import db from './../pg-adaptor.js'

class Address {
  static findById(id) {
    return db.one(`select * from addresses where id=$1`, [id]).then(res => res).catch(err => err)
  }

  static whereByRegion(region) {
    return db.any(`select * from addresses where region=$1`, [region]).then(res => res).catch(err => err)
  }

  static whereByCity(city) {
    return db.any(`select * from addresses where city=$1`, [city]).then(res => res).catch(err => err)
  }

  static whereByZipCode(zip_code) {
    return db.any(`select * from addresses where zip_code=$1`, [zip_code]).then(res => res).catch(err => err)
  }

  // need to do find by km/miles
  static findByLongLat(long, lat) {
    return db.any(`select * from addresses where longitude=$1 and latitude=$2`, [longitude, latitude])
      .then(res => res)
      .catch(err => err)
  }

  static create(
    address_1,
    address_2,
    city,
    region,
    zip_code,
    country
  ) {
    // add Google's Geo API here to generate long, lat, and timezone
    return db.one(
      `insert into addresses (address_1, address_2, city, region, zip_code, country)
       values ($1, $2, $3, $4, $5, $6) returning id`,
      [address_1, address_2, city, region, zip_code, country]
    ).then(res => res).catch(err => err)
  }

  static update(
    id,
    address_1,
    address_2,
    city,
    region,
    zip_code,
    country
  ) {
    // add Google's Geo API here to generate long, lat, and timezone
    db.none(
      `update addresses set
       address_1 = coalesce($1, address_1),
       address_2 = coalesce($2, address_2),
       city = coalesce($3, city),
       region = coalesce($4, region),
       zip_code = coalesce($5, zip_code),
       country = coalesce($6, country)
       where id = $7`,
      [address_1, address_2, city, region, zip_code, country, id]
    ).then(res => res).catch(err => err)

    return true
  }
}

export default Address
