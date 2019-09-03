import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import logger from './src/logger'
import graphQLHandler from './src/handlers/graphql'
import googleHandler from './src/handlers/google'
import responseTimeMiddleware from './src/middlewares/response-time'
import authenticationMiddleware from './src/middlewares/authentication'

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Create an express server and a GraphQL endpoint
const app = express()
app.use(morgan('combined', { stream: logger.stream }))
app.use(
  '/graphql',
  [cors(corsOptions), responseTimeMiddleware, authenticationMiddleware],
  graphQLHandler
)

// Google endpoint
app.use(
  '/google/:name',
  [cors(corsOptions), responseTimeMiddleware, authenticationMiddleware],
  googleHandler
)

// Register app to listen on port 4000
app.listen(4000, () => logger.info(`Express Server Now Running On localhost:4000/graphql`))
