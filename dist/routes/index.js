"use strict";
const { Router } = require('express');
const router = Router();
const login = require('./login');
const register = require('./register');
router.use('/login', login);
router.use('/register', register);
module.exports = router;
