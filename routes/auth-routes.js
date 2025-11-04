const express = require('express');
const {registerUser , loginController} = require('../controller/auth-controller');
const router = express.Router(); // It is an small express app where it mange the moudlar and mountable route handlers
 
router.post('/register' ,registerUser );
router.post('/login' ,loginController );

module.exports = router;
