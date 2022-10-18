const bcrypt = require('../helper/bcrypt')
const {createToken} = require('../helper/jwt')
const userRepository = require('../repository/users')

const controllerUser = {
    register : async (req, res) => {
        const {email, password} = req.body
        let register = await userRepository.register(email, bcrypt.Hash(password))
        const token = await createToken({email : req.body.email, id : register.id})
        if(!register) {
            return res.status(400).json("register failed")
        }
        return res.status(201).json({
            token : token
        })
    },

    login : async (req, res) => {
        const {email, password} = req.body
        let dataUsers = await userRepository.selectByEmail(email)
        if(!dataUsers) {
            return res.status(404).json("email fail")
        }
        let verifyPassword = await bcrypt.Compare(password, dataUsers.password)
         if(!verifyPassword) {
            return res.status(404).json("password fail")
         }
        const token = await createToken({email : req.body.email, id : dataUsers.id})
        return res.status(200).json({
            token : token
        })
    }
}

module.exports = controllerUser