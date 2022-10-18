const pool = require('../config/config')
const execute = async (query) => {
   await pool.query(query).catch(console.log)
}

const createTableUser = `CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(100) UNIQUE NOT NULL,
    "password" VARCHAR(100) NOT NULL
);`;

const createTableRefletions = `CREATE TABLE "reflections" (
    "id" SERIAL PRIMARY KEY,
    "success" VARCHAR(100) NOT NULL,
    "low_point" VARCHAR(100) NOT NULL,
    "take_away" VARCHAR(100) NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP NOT NULL,
    "modified_date" TIMESTAMP NOT NULL,
    FOREIGN KEY ("owner_id") REFERENCES "users" ("id")
);`;

execute(createTableUser).then(result => {
    if(result) {
        console.log("Table user created")
    }
})

execute(createTableRefletions).then(result => {
    if(result) {
        console.log("Table refelections created")
    }
})