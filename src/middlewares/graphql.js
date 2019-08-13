import expressGraphql from 'express-graphql'
import { buildSchema } from 'graphql'
import typeDefs from './../type-defs.js'
import resolvers from './../resolvers.js'

const schema = buildSchema(typeDefs)
const graphQLMiddleware =  expressGraphql({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
})

export default graphQLMiddleware
