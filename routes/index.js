const express = require('express')
const router = express.Router()

//const authenticate = require('../middlewares/authentication')

router.use('/auth', require('../config/auth'))
/*router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/reviews', require('./reviews'))
router.use('/orders',  require('./orders'))*/

module.exports = router