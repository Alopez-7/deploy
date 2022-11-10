const router = require('express').Router();
const { findUsers } = require('../controllers/users');

router.get('/', findUsers);


module.exports = router;