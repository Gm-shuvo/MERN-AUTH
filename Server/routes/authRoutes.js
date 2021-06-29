const router = require('express').Router()
const {registerController} = require('../controllers/authController')

//SignUp with username,email,password
router.get('/signup',registerController)

module.exports = router