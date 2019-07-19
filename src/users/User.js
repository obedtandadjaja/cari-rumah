import users from './data'

class User {
  static all() {
    return users
  }

  static findOne(id) {
    return users.filter(user => user.id == id)[0]
  }
}

export default User
