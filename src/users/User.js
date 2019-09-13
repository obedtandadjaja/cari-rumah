import db from './../pg-adaptor'

class User {
  static all() {
    return db.any(`select * from users`)
  }

  static findById(id) {
    return db.one(`select * from users where id=$1`, [id])
  }

  static create(name, email, phone, notification_methods) {
    return db.one(
      `insert into users (name, email, phone, notification_methods)
       values ($1, $2, $3, $4) returning id`,
      [name, email, phone, notification_methods]
    )
  }
}

export default User
