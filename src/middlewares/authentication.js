function isAuthenticated(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization'] || ''

  // skips authentication on dev
  if (process.env.ENV === 'dev')
    return next()

  // removes Bearer from string
  if (token.startsWith('Bearer '))
    token = token.slice(7, token.length);

  if (token) {
    if (token === 'secret') // change this to a call to auth service
      return next()
  } else {
    return res.json({
      status: 401,
      message: 'Invalid token'
    })
  }
}

export default isAuthenticated
