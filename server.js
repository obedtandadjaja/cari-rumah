import express from 'express'
import morgan from 'morgan'
import logger from './src/logger'
import graphQLMiddleware from './src/middlewares/graphql'
import googleMiddleware from './src/middlewares/google'
import responseTimeMiddleware from './src/middlewares/response-time'
import authenticationMiddleware from './src/middlewares/authentication'

// Create an express server and a GraphQL endpoint
const app = express()
app.use(morgan('combined', { stream: logger.stream }))
app.use(
  '/graphql',
  [responseTimeMiddleware, authenticationMiddleware],
  graphQLMiddleware
)
app.use(
  '/google/:name',
  [responseTimeMiddleware, authenticationMiddleware],
  googleMiddleware
)
app.listen(4000, () => logger.info(`Express GraphQL Server Now Running On localhost:4000/graphql`))
