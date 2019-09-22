import db from './../pg-adaptor'

class User {
  static all(options={connection: db}) {
    return options.connection.any(`select * from users`)
  }

  static findById(id, options={connection: db}) {
    return options.connection.one(`select * from users where id=$1`, [id])
  }

  static findByCredentialId(credentialId, options={connection: db}) {
    return options.connection.one(`select * from users where credential_id=$1`, [credentialId])
  }

  static create(args, options={connection: db}) {
    return options.connection.one(
      `insert into users (name, email, phone, notification_methods, credential_id)
       values (${name}, ${email}, ${phone}, ${notification_methods}, ${credential_id}) returning id`,
      args
    )
  }
}

export default User
