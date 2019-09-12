import { ApolloServer, gql } from 'apollo-server-express'
import { buildSchema } from 'graphql'
import typeDefs from './../type-defs'
import resolvers from './../resolvers'

const schema = gql(typeDefs)
const graphQL = new ApolloServer({ typeDefs, resolvers })

export default graphQL
