import expressGraphql from 'express-graphql'
import { buildSchema } from 'graphql'
import typeDefs from './../type-defs'
import resolvers from './../resolvers'

const schema = buildSchema(typeDefs)
const graphQLMiddleware =  expressGraphql({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
  customFormatErrorFn: (error) => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack ? error.stack.split('\n') : [],
    path: error.path,
  })
})

export default graphQLMiddleware
