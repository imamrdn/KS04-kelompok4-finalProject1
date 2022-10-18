const jwt = require('jsonwebtoken')

function createToken (payload) {
    return jwt.sign(payload, process.env.JWT_SECRET)
}

module.exports ={
    createToken
}