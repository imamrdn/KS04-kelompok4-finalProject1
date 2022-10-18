const router = require("express").Router()
const ControllerUser = require('../controller/controllerUser.js')

router.post('/users/register', ControllerUser.register)
router.post('/users/login', ControllerUser.login)

module.exports = router