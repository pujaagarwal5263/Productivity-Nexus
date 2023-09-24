const Nylas = require('nylas')

require('dotenv').config()

const id = process.env.CLIENT_ID
const secret = process.env.CLIENT_SECRET

Nylas.config({
  clientId: id,
  clientSecret: secret
})
