import User from './User'

export default {
  // Query
  user: ({ id }) => User.findOne(id),
  users: () => User.all(),

  // Mutation
  createUser: () => {},

  User: {},
}
