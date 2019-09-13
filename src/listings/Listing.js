import db from './../pg-adaptor'

class Listing {
  static findById(id) {
    return db.one(`select * from listings where id=$1`, [id]).then(res => res).catch(err => err)
  }

  static findByAddress(address_id) {
    return db.one(`select * from listings where address_id=$1`, [id]).then(res => res).catch(err => err)
  }

  static whereByAddresses(address_ids) {
    return db.any(`select * from listings where address_id in ($1:csv)`, [address_ids]).then(res => res).catch(err => err)
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
    picture_urls,
    residential_type,
    type
  ) {
    // add Google's Geo API here to generate long, lat, and timezone
    return db.one(
      `insert into addresses (user_id, address_id, num_bedrooms, num_bathrooms, num_parking_lots, num_stories
       lot_size_sqft, year_built, price_cents, price_currency, description, display_picture_url, picture_urls,
       residential_type, type)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) returning id`,
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
        picture_urls,
        residential_type,
        type
      ]
    ).then(res => res).catch(err => err)
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
    picture_urls,
    residential_type,
    type
  ) {
    db.none(
      `update addresses set
       user_id = coalesce($1, user_id),
       address_id = coalesce($2, address_id),
       num_bedrooms = coalesce($3, num_bedrooms),
       num_bathrooms = coalesce($4, num_bathrooms),
       num_parking_lots = coalesce($5, num_parking_lots),
       num_stories = coalesce($6, num_stories),
       lot_size_sqft = coalesce($7, lot_size_sqft),
       year_built = coalesce($8, year_built),
       price_cents = coalesce($9, price_cents),
       price_currency = coalesce($10, price_currency),
       description = coalesce($11, description),
       display_picture_url = coalesce($12, display_picture_url),
       picture_urls = coalesce($13, picture_urls),
       residential_type = coalesce($14, residential_type),
       type = coalesce($15, type)
       where id = $id`,
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
        picture_urls,
        residential_type,
        type,
        id
      ]
    ).then(res => res).catch(err => err)

    return true
  }
}

export default Listing
