const router = require("express").Router()
const ControllerUser = ('../controller/controllerUser.js')

router.post('/api/v1/users/register', ControllerUser.login)
router.post('/api/v1/users/login', ControllerUser.register)

