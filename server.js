import express from 'express'
import morgan from 'morgan'
import logger from './src/logger'
import graphQLMiddleware from './src/middlewares/graphql'
import authenticationMiddleware from './src/middlewares/authentication'

// Create an express server and a GraphQL endpoint
const app = express()
app.use(morgan('combined', { stream: logger.stream }))
app.use(
  `/graphql`,
  [authenticationMiddleware],
  graphQLMiddleware
)
app.listen(4000, () => logger.info(`Express GraphQL Server Now Running On localhost:4000/graphql`))
