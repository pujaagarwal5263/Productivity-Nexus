const Nylas = require('nylas')

require('dotenv').config()

const id = process.env.CLIENT_ID
const secret = process.env.CLIENT_SECRET
const token = process.env.ACCESS_TOKEN

Nylas.config({
  clientId: id,
  clientSecret: secret
})

const nylas = Nylas.with(token)
console.log(nylas)
