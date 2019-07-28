import User from './User'

export default {
  user: ({ id }) => User.findById(1),
  users: () => User.all(),
  createUser: ({ name, email, phone, notification_methods}) => User.create(name, email, phone, notification_methods),
  User: {},
}
