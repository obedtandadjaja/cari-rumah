import express from 'express'
import expressGraphql from 'express-graphql'
import { buildSchema } from 'graphql'

import typeDefs from './src/type-defs'
import resolvers from './src/resolvers'

import getGeocode from './src/google/maps/geocoding.js'

const schema = buildSchema(typeDefs)

getGeocode('1200 S Broadway', 'APT 204', 'Los Angeles', 'CA', '90015', 'US')

// Create an express server and a GraphQL endpoint
const app = express()
app.use(`/graphql`, expressGraphql({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))
app.listen(4000, () => console.log(`Express GraphQL Server Now Running On localhost:4000/graphql`))
