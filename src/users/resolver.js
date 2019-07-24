import User from './User'

export default {
  user: ({ id }) => User.findById(id),
  users: () => User.all(),
  createUser: () => {},
  User: {},
}
