import db from './../pg-adaptor'

class User {
  static all(connection=db) {
    return connection.any(`select * from users`)
  }

  static findById(connection=db, id) {
    return connection.one(`select * from users where id=$1`, [id])
  }

  static findByCredentialId(connection=db, credentialId) {
    return connection.one(`select * from users where credential_id=$1`, [credentialId])
  }

  static create(connection=db, args) {
    return connection.one(
      `insert into users (name, email, phone, notification_methods, credential_id)
       values (${name}, ${email}, ${phone}, ${notification_methods}, ${credential_id}) returning id`,
      args
    )
  }
}

export default User
