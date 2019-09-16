import { ApolloServer, gql } from 'apollo-server-express'
import { buildSchema } from 'graphql'
import typeDefs from './../type-defs'
import resolvers from './../resolvers'

const schema = gql(typeDefs)
const graphQL = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // // get the user token from the headers
    // const token = req.headers.authorization || '';

    // // try to retrieve a user with the token
    // const user = getUser(token);

    // // add the user to the context
    // return { user };
  },
})

export default graphQL
