"use strict";
const { Router } = require('express');
const router = Router();
const login = require('./login');
const register = require('./register');
const products = require('./products');
const newProduct = require('./newProduct');
const uploadImage = require('./uploadimage');
const changePassword = require('./changePassword');
const detail = require('./detail');
router.use('/login', login);
router.use('/register', register);
router.use('/products', products);
router.use('/newproduct', newProduct);
router.use('/uploadimage', uploadImage);
router.use('/changePassword', changePassword);
router.use('/detail', detail);
module.exports = router;
