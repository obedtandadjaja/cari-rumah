import { ApolloServer, gql, AuthenticationError } from 'apollo-server-express'
import { buildSchema } from 'graphql'
import jwtDecode from 'jwt-decode'
import typeDefs from './../type-defs'
import resolvers from './../resolvers'
import AuthClient from './../auth/client'
import User from './../users/User'

const schema = gql(typeDefs)
const graphQL = new ApolloServer({
  typeDefs,
  resolvers,
  context: async({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || ''

    const jwtDecoded = jwtDecode(token)
    const user = User.findByCredentialId(jwtDecoded.credential_id).catch(err => null)

    if (!user) {
      throw new AuthenticationError('Invalid JWT; Unauthorized')
    }

    // add the user to the context
    return { user }
  },
})

export default graphQL
