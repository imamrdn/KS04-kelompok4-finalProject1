const jwt = require('jsonwebtoken')

const JWT = {
    createJwt : (payload) => {
         return jwt.sign(payload, process.env.JWT_SECRET)
    },
    verifyToken : (token) => {
        return jwt.verify(token, process.env.JWT_SECRET)
    }
}

module.exports = JWT