import db from './../pg-adaptor'

class User {
  static all() {
    return db.any(`select * from users`)
  }

  static findById(id) {
    return db.one(`select * from users where id=$1`, [id])
  }

  static create(args) {
    return db.one(
      `insert into users (name, email, phone, notification_methods, credential_id)
       values (${name}, ${email}, ${phone}, ${notification_methods}, ${credential_id}) returning id`,
      args
    )
  }
}

export default User
