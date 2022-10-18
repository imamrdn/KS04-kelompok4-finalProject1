const Pool = require('pg').Pool

const pool = new Pool({
    host : 'localhost',
    user : 'postgres',
    database : 'final-project-1',
    password : '12345678',
    port : 5432,
});

module.exports = pool