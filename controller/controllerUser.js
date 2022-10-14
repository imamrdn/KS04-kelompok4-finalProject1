const bcrypt = require('../helper/bcrypt')
const controllerUser = {
    register : (req, res) => {
        const {email, password} = req.body
        bcrypt.Hash(password)

    },
    login : (req, res) => {
        const {email, password} = req.body
    }
}