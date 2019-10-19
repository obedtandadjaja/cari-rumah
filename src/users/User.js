import db from './../pg-adaptor'

export const userDefaultOptions = {
  connection: db,
  orderBy: 'id',
  orderDirection: 'asc'
}

export class User {
  static all(options=userDefaultOptions) {
    return options.connection.any(`select * from users`)
  }

  static findById(id, options=userDefaultOptions) {
    return options.connection.one(`select * from users where id=$1`, [id])
  }

  static findByCredentialId(credentialId, options=userDefaultOptions) {
    return options.connection.one(`select * from users where credential_id=$1`, [credentialId])
  }

  static create(args, options=userDefaultOptions) {
    return options.connection.one(
      `insert into users (name, email, phone, notification_methods, credential_id)
       values (${name}, ${email}, ${phone}, ${notification_methods}, ${credential_id}) returning id`,
      args
    )
  }

  static saveListing(listing_id, user_id, options=userDefaultOptions) {
    return options.connection.none(
      `update users set saved_listing_ids = saved_listing_ids || $1 where id = $2`,
      [listing_id, user_id]
    )
  }
}
