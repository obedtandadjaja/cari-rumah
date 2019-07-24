import db from './../pg-adaptor.js'

class User {
  static all() {
    return db.any(`select * from users`).then(res => res).catch(err => err)
  }

  static findById(id) {
    return db.one(`select * from users where id=$1`, [id]).then(res => res).catch(err => err)
  }
}

export default User
