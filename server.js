import express from 'express'
import expressGraphql from 'express-graphql'
import { buildSchema } from 'graphql'
import morgan from 'morgan'

import typeDefs from './src/type-defs'
import resolvers from './src/resolvers'
import logger from './src/logger.js'

const schema = buildSchema(typeDefs)

// Create an express server and a GraphQL endpoint
const app = express()
app.use(morgan('combined', { stream: logger.stream }))
app.use(
  `/graphql`,
  expressGraphql({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
)
app.listen(4000, () => logger.info(`Express GraphQL Server Now Running On localhost:4000/graphql`))
