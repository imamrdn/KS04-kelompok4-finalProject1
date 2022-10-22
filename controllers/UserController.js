const bcrypt = require('../helpers/bcrypt')
const {createToken} = require('../helpers/jwt')
const userRepository = require('../repository/users')

const UserController = {
    register : async (req, res) => {
        const {email, password} = req.body
        let register = await userRepository.register(email, bcrypt.Hash(password))
        const token = await createToken({email : req.body.email, id : register.id})
        if(!register) {
            return res.status(401).json("Failed to Register Account")
        }
        return res.status(201).json({
            token : token
        })
    },

    login : async (req, res) => {
        const {email, password} = req.body
        let dataUsers = await userRepository.selectByEmail(email)
        if(!dataUsers) {
            return res.status(404).json("Email is not found")
        }
        let verifyPassword = await bcrypt.Compare(password, dataUsers.password)
         if(!verifyPassword) {
            return res.status(404).json("Password is not found")
         }
        const token = await createToken({email : req.body.email, id : dataUsers.id})
        return res.status(200).json({
            token : token
        })
    }
}

module.exports = UserController