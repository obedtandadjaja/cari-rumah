import User from './User'

export default {
  Query: {
    user: async(root, { id }, context) => await User.findById(1),
    users: async(root, args, context) => await User.all(),
  },
  Mutation: {
    createUser: async(root, { name, email, phone, notification_methods}, context) => await User.create(name, email, phone, notification_methods),
  },
  User: {},
}
