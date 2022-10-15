const pool = require('../config/config')

const repositoryUsers = {
    selectByEmail :  async ( email) => {
        let query = await pool.query(`SELECT * FROM users WHERE email = $1`,[email])
        .catch(console.log)
        if(!query) return false
        return query.rows[0]
    },
    register : async (email, password) => {
        let query = await pool.query(`INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`, [email, password])
        .catch(console.log)
        if(!query) return false
        return true
    }
}
module.exports = repositoryUsers