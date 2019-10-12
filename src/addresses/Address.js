import db from './../pg-adaptor'
import getGeocode from './../google/maps/geocoding'
import getTimezone from './../google/maps/timezone'

export const addressDefaultOptions = {
  connection: db,
  sortBy: 'id',
  sortDirection: 'asc'
}

export class Address {
  static findById(id, options=addressDefaultOptions) {
    return options.connection.one(`select * from addresses where id=$1`, [id])
  }

  static whereByZipCode(zipCode, options=addressDefaultOptions) {
    return options.connection.any(`select * from addresses where zip_code=$1`, [zipCode])
  }

  static whereByLatLongDistance(lat, long, distanceInMiles, options=addressDefaultOptions) {
    return options.connection.any(
      'select * from addresses\
      where (point(latitude, longitude)::point <@> point($1, $2)) <= $3',
      [lat, long, distanceInMiles]
    )
  }

  static whereByLatLongRectangle(args, options=addressDefaultOptions) {
    return options.connection.any(
      'select *\
      from addresses\
      inner join (\
        select ST_MakeEnvelope(${sw.long}, ${sw.lat}, ${ne.long}, ${ne.lat}, 3857) as enclosure\
      ) as rectangle on ST_Within(addresses.geometry, rectangle.enclosure)',
      args
    )
  }

  static create(args, options=addressDefaultOptions) {
    return getGeocode(args.address_1, args.address_2, args.administrative_area_level_2, args.administrative_area_level_1, args.zip_code, args.country)
      .then((loc) => {
        return getTimezone(loc.lat, loc.lng).then(res => [res, loc])
      })
      .then((res) => {
        const [timezone, location] = res
        return options.connection.one(
          `insert into addresses (address_1, address_2, administrative_area_level_4, administrative_area_level_3, administrative_area_level_2, administrative_area_level_1, zip_code, country, longitude, latitude, geometry, timezone)
           values (${address_1}, ${address_2}, ${administrative_area_level_4}, ${administrative_area_level_3}, ${administrative_area_level_2}, ${administrative_area_level_1}, ${zip_code}, ${country}, ${location.lng}, ${location.lat}, ST_SetSRID(ST_MakePoint(${location.lng}, ${location.lat}), 3857), ${timezone}) returning id`,
          {...args, timezone, location}
        )
      })
  }

  static update(args, options=addressDefaultOptions) {
    return options.connection.none(
      `update addresses set
       address_1 = coalesce(${address_1}, address_1),
       address_2 = coalesce(${address_2}, address_2),
       administrative_area_level_4 = coalesce(${administrative_area_level_4}, administrative_area_level_4),
       administrative_area_level_3 = coalesce(${administrative_area_level_3}, administrative_area_level_3),
       administrative_area_level_2 = coalesce(${administrative_area_level_2}, administrative_area_level_2),
       administrative_area_level_1 = coalesce(${administrative_area_level_1}, administrative_area_level_1),
       zip_code = coalesce(${zip_code}, zip_code),
       country = coalesce(${country}, country)
       where id = ${id}`,
      args
    )
      .then(res => this.findById(id))
      .then(address => {
        return getGeocode(
          address.address_1,
          address.address_2,
          address.administrative_area_level_2,
          address.administrative_area_level_1,
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
