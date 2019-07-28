export default `
  type User {
    id: ID!
    name: String
    email: String
    phone: String
    notification_methods: [String]
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(
      name: String!,
      email: String!,
      phone: String!,
      notification_methods: [String]!
    ): User
  }
`
