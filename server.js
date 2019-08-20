import express from 'express'
import morgan from 'morgan'
import logger from './src/logger'
import graphQLHandler from './src/handlers/graphql'
import googleHandler from './src/handlers/google'
import responseTimeMiddleware from './src/middlewares/response-time'
import authenticationMiddleware from './src/middlewares/authentication'

// Create an express server and a GraphQL endpoint
const app = express()
app.use(morgan('combined', { stream: logger.stream }))
app.use(
  '/graphql',
  [responseTimeMiddleware, authenticationMiddleware],
  graphQLHandler
)
app.use(
  '/google/:name',
  [responseTimeMiddleware, authenticationMiddleware],
  googleHandler
)
app.listen(4000, () => logger.info(`Express GraphQL Server Now Running On localhost:4000/graphql`))
