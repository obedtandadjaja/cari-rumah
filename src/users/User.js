import db from './../pg-adaptor'

const defaultOptions = {
  connection: db,
  orderBy: 'id',
  orderDirection: 'asc'
}

class User {
  static all(options=defaultOptions) {
    return options.connection.any(`select * from users`)
  }

  static findById(id, options=defaultOptions) {
    return options.connection.one(`select * from users where id=$1`, [id])
  }

  static findByCredentialId(credentialId, options=defaultOptions) {
    return options.connection.one(`select * from users where credential_id=$1`, [credentialId])
  }

  static create(args, options=defaultOptions) {
    return options.connection.one(
      `insert into users (name, email, phone, notification_methods, credential_id)
       values (${name}, ${email}, ${phone}, ${notification_methods}, ${credential_id}) returning id`,
      args
    )
  }
}

export default User
