export default `
  type User {
    id: ID!
    first_name: String
    last_name: String
    email: String
    phone: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(
      first_name: String!,
      last_name: String!,
      email: String!,
      phone: String!
    ): User
  }
`
