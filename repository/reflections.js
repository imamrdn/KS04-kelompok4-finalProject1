
const { Query } = require('pg')
const pool = require('../config/config')


const Reflections = {
    create : async ({success, low_point, take_away}, ownerId) => {
        const created_date = new Date()
        const modified_date = new Date() 
        let query = await pool.query(`INSERT INTO reflections (success, low_point, take_away, owner_id, created_date, modified_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [success, low_point, take_away, ownerId, created_date, modified_date])
        .catch(console.log)
        if(!query) return false
        return query.rows[0]
    },
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
        if(query.rowCount === 0) return false
        return true
    }
}

module.exports = Reflections