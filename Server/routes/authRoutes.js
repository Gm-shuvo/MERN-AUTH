const router = require('express').Router()
const {registerController} = require('../controllers/authController')

//SignUp with username,email,password
router.post('/signup',registerController)

module.exports = router