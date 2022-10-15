
const pool = require('../config/config')


const Reflections = {
    update : async ({}, id, ownerId) => {
         let query = await pool.query(`UPDATE * FROM reflections WHERE id = $1 AND owner_id = $2`, [id, ownerId])
        .catch(console.log)
        if(!query) return false
        return query.rows[0]
    },
    selectById : async (id, ownerId) => {
         let query = await pool.query(`SELECT * FROM reflections WHERE id = $1 AND owner_id = $2`, [id, ownerId])
        .catch(console.log)
        if(!query) return false
        return query.rows[0]
    },
    selectAll  : async (ownerId) => {
        let query = await pool.query(`SELECT * FROM reflections WHERE owner_id = $1`,[ownerId])
        .catch(console.log)
        if(!query) return false
        return query.rows[0]
    },
    delete : async (id, ownerId) => {
        let query = await pool.query(`DELETE FROM reflections WHERE id = $1 AND owner_id = $2`,[id, ownerId])
        .catch(console.log)
        if(!query) return false
        return true
    }
}

module.exports = Reflections