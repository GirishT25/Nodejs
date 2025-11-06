const express = require('express');
const router = express.Router();
const {insertProducts, getProducts}= require('../controllers/productController');


router.post('/addproducts' ,insertProducts );
router.get('/getProducts' , getProducts);

module.exports = router;
