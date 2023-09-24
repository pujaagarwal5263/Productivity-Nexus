const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers')

// Define a sample route
router.get('/', controllers.hello)
router.get('/auth', controllers.nylasAuth)

module.exports = router
