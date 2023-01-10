const { Router } = require('express');

const router = Router()

const login = require('./login')
const register = require('./register')
const uploadImage = require('./uploadimage')
const changePassword = require('./changePassword')
const detail = require('./detail')
const newEmployee = require('./createEmployee')

router.use('/login', login)
router.use('/register', register)
router.use('/uploadimage', uploadImage)
router.use('/changePassword', changePassword)
router.use('/detail', detail)
router.use('/createEmployee', newEmployee)


module.exports = router