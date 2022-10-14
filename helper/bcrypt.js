const bcrypt = require('bcrypt')

const Bcrypt = {
    Hash : (input) => {
        return bcrypt.hashSync(input, 10)
    },
    Compare : (input, hash) => {
        return bcrypt.compareSync(input, hashed)
    }
}

module.exports = Bcrypt