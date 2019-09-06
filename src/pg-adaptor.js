import pgPromise from 'pg-promise'

const pgp = pgPromise({})
const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DB,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}
const db = pgp(config)

export default db
