import db from './../pg-adaptor'

class Listing {
  static findById(id, options={connection: db}) {
    return options.connection.one(`select * from listings where id=$1`, [id])
  }

  static whereByIds(ids, options={connection: db}) {
    return options.connection.any(`select * from listings where address_id in ($1:csv)`, [ids])
  }

  static findByAddress(address_id, options={connection: db}) {
    return options.connection.one(`select * from listings where address_id=$1`, [address_id])
  }

  static whereByAddresses(address_ids, options={connection: db}) {
    return options.connection.any(`select * from listings where address_id in ($1:csv)`, [address_ids])
  }

  static whereByUserId(user_id, options={connection: db}) {
    return options.connection.any(`select * from listings where user_id=$1`, [user_id])
  }

  static create(args, options={connection: db}) {
    return options.connection.one(
      `insert into addresses (user_id, address_id, num_bedrooms, num_bathrooms, num_parking_lots, num_stories
       lot_size_m2, year_built, price_idr, description, display_picture_url, picture_urls, residential_type,
       type)
       values (${user_id}, ${address_id}, ${num_bedrooms}, ${num_bathrooms}, ${num_parking_lots},
       ${num_stories}, ${lot_size_m2}, ${year_built}, ${price_idr}, ${description},
       ${display_picture_url}, ${picture_urls}, ${residential_type}, ${type}) returning id`,
      args
    )
  }

  static update(args, options={connection: db}) {
    return options.connection.none(
      `update addresses set
       user_id = coalesce(${user_id}, user_id),
       address_id = coalesce(${address_id}, address_id),
       num_bedrooms = coalesce(${num_bedrooms}, num_bedrooms),
       num_bathrooms = coalesce(${num_bathrooms}, num_bathrooms),
       num_parking_lots = coalesce(${num_parking_lots}, num_parking_lots),
       num_stories = coalesce(${num_stories}, num_stories),
       lot_size_m2 = coalesce(${lot_size_m2}, lot_size_m2),
       year_built = coalesce(${year_built}, year_built),
       price_idr = coalesce(${price_idr}, price_idr),
       description = coalesce(${description}, description),
       display_picture_url = coalesce(${display_picture_url}, display_picture_url),
       picture_urls = coalesce(${picture_urls}, picture_urls),
       residential_type = coalesce(${residential_type}, residential_type),
       type = coalesce(${type}, type)
       where id = $id`, args
    )
  }
}

export default Listing
