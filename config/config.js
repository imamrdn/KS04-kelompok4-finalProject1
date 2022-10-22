const Pool = require('pg').Pool

const pool = new Pool({
    host : 'localhost',
    user : 'postgres',
    database : 'final_project_1',
    password : 'root',
    port : 5432,
});

module.exports = pool