import User from './User'

export default {
  Query: {
    user: ({ id }) => User.findById(1),
    users: () => User.all(),
  },
  Mutation: {
    createUser: ({ name, email, phone, notification_methods}) => User.create(name, email, phone, notification_methods),
  },
  User: {},
}
