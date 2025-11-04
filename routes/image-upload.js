const express = require('express');
const router = express.Router();
const authmiddleware = require('../middlewares/auth-middleware');
const adimAuth = require('../middlewares/admin-middleware');
const uploadImageCloudinary = require('../middlewares/image-upload-middleware')
const {uploadImage} = require('../controller/image-controller')

router.post('/upload' , authmiddleware , adimAuth ,uploadImageCloudinary.single('image') , uploadImage );

module.exports = router