import db from './../pg-adaptor.js'

class Listing {
  static findById(id) {
    return db.one(`select * from listings where id=$1`, [id]).then(res => res).catch(err => err)
  }

  static findByAddress(address_id) {
    return db.one(`select * from listings where address_id=$1`, [id]).then(res => res).catch(err => err)
  }

  static whereByAddresses(address_ids) {
    return db.any(`select * from listings where address_id in $1`, [address_ids]).then(res => res).catch(err => err)
  }

  static whereByUserId(user_id) {
    return db.any(`select * from listings where user_id=$1`, [id]).then(res => res).catch(err => err)
  }

  static create(
    user_id,
    address_id,
    num_bedrooms,
    num_bathrooms,
    num_parking_lots,
    num_stories,
    lot_size_sqft,
    year_built,
    price_cents,
    price_currency,
    description,
    display_picture_url,
    residential_type,
    type
  ) {
    // add Google's Geo API here to generate long, lat, and timezone
    return db.one(
      `insert into addresses (user_id, address_id, num_bedrooms, num_bathrooms, num_parking_lots, num_stories
       lot_size_sqft, year_built, price_cents, price_currency, description, display_picture_url, residential_type, type)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning id`,
      [
        user_id,
        address_id,
        num_bedrooms,
        num_bathrooms,
        num_parking_lots,
        num_stories,
        lot_size_sqft,
        year_built,
        price_cents,
        price_currency,
        description,
        display_picture_url,
        residential_type,
        type
      ]
    ).then(res => res).cathc(err => err)
  }

  static update(
    id,
    user_id,
    address_id,
    num_bedrooms,
    num_bathrooms,
    num_parking_lots,
    num_stories,
    lot_size_sqft,
    year_built,
    price_cents,
    price_currency,
    description,
    display_picture_url,
    residential_type,
    type
  ) {
    return db.none(
      `update addresses set
       user_id = $1, address_id = $2, num_bedrooms = $3, num_bathrooms = $4, num_parking_lots = $5, num_stories = $6,
       lot_size_sqft = $7, year_built = $8, price_cents = $9, price_currency = $10, description = $11, display_picture_url = $12,
       residential_type = $13, type = $14
       where id = $15`,
      [
        user_id,
        address_id,
        num_bedrooms,
        num_bathrooms,
        num_parking_lots,
        num_stories,
        lot_size_sqft,
        year_built,
        price_cents,
        price_currency,
        description,
        display_picture_url,
        residential_type,
        type,
        id
      ]
    ).then(res => res).cathc(err => err)
  }
}
