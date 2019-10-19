export default `
  type User {
    id: ID!
    name: String
    email: String
    phone: String
    notification_methods: [String]
    listings: [Listing]
    saved_listings: [Listing]
    credential_id: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(
      name: String!,
      email: String!,
      phone: String,
      password: String
    ): User
    saveListing(
      user_id: ID!,
      listing_id: ID!
    ): Boolean
  }
`
