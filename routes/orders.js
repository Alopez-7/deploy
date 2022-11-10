const router = require('express').Router();
const { createOrder,updateOrder,deleteOrder,getOrders,getOrder } = require('../controllers/orders');
const auth = require('../config/auth');
const { isSeller } = require('../config/auth');
const passport = require('passport');



router.post('/createOrder', passport.authenticate('local', {session: false, assignProperty: 'user'}),createOrder);
router.patch('/:id', auth.isSeller,updateOrder);
router.delete('/:id',auth.isBuyer,deleteOrder)
router.get('/history',passport.authenticate('local', {session: false, assignProperty: 'user'}),getOrders)
router.get('/:id',auth.required,getOrder)

module.exports = router; 