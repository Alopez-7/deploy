const router = require('express').Router();
const { addProduct,getProducts ,deleteProduct,updateProduct,getProduct,getProductByName} = require('../controllers/products');
const auth = require('../config/auth')
const passport = require('passport');


router.post('/addProduct',auth.isSeller, addProduct);
router.get('/',getProducts)
router.get('/search',getProductByName)
router.patch('/:id', auth.isSeller,updateProduct);
router.delete('/:id',auth.isSeller,deleteProduct)
router.get('/:id',getProduct)

module.exports = router; 