const router = require("express").Router()
const ControllerUser = require('../controllers/UserController.js')

router.post('/users/register', UserController.register)
router.post('/users/login', UserController.login)

module.exports = router