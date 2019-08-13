import express from 'express'
import expressGraphql from 'express-graphql'
import { buildSchema } from 'graphql'
import morgan from 'morgan'
import logger from './src/logger.js'
import graphQLMiddleware from './src/middlewares/graphql.js'

// Create an express server and a GraphQL endpoint
const app = express()
app.use(morgan('combined', { stream: logger.stream }))
app.use(
  `/graphql`,
  graphQLMiddleware
)
app.listen(4000, () => logger.info(`Express GraphQL Server Now Running On localhost:4000/graphql`))
