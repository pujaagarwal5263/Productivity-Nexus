const nylas = require('nylas')

const hello = (req, res) => {
  return res.send('server is running')
}

const nylasAuth = (req, res) => {
  const authUrl = nylas.urlForAuthentication({
    redirectURI: 'https://react-three-fiber-car-showcase.vercel.app/'
  })
  res.redirect(authUrl)
  console.log('response: ', res)
}

module.exports = { hello, nylasAuth }
