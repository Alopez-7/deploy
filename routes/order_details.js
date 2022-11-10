const router = require('express').Router();
const { createOrderDet, updateOrderDet,getOrderDetail,getOrdersDetail,deleteOrderDetail } = require('../controllers/order_details');
const auth = require('../config/auth')



router.post('/createOrder', auth.isBuyer,createOrderDet);
router.patch('/:id', auth.isBuyer,updateOrderDet);
router.delete('/:id',auth.isBuyer,deleteOrderDetail)
router.get('/',auth.isBuyer,getOrdersDetail)
router.get('/:id',auth.isBuyer,getOrderDetail)

module.exports = router; 