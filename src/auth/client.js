import axios from 'axios'

class AuthClient {
  static subject = 'cari-rumah'

  static token = (identifier, password) => {
    return axios.post(
      `${process.env.AUTH_SERVICE_HOST}:${process.env.AUTH_SERVICE_PORT}/token`,
      JSON.stringify({
        subject: subject,
        identifier: identifier,
        password: password
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }

  static verify = (jwt) => {
    return axios.post(
      `${process.env.AUTH_SERVICE_HOST}:${process.env.AUTH_SERVICE_PORT}/verify`,
      JSON.stringify({
        jwt: jwt
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }
}

export default AuthClient
