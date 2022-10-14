
const Pool = require('pg').Pool

const pool = new Pool({
    host : 'localhost',
    user : 'postgres',
    database : 'final-project-1',
    password : '12345678',
    port : 5432,
});

const execute = async (query) => {
   await pool.query(query).catch(console.log)
   console.log("Table user created")
   console.log("Table refelections created")
}

const createTableUser = `CREATE TABLE "users" (
    "id" SERIAL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    PRIMARY KEY ("id")
);`;

const createTableRefletions = `CREATE TABLE "reflections" (
    "id" SERIAL,
    "success" VARCHAR(100) NOT NULL,
    "low_point" VARCHAR(100) NOT NULL,
    "take_away" VARCHAR(100) NOT NULL,
    "owner_id" INTEGER,
    "created_date" VARCHAR(100) NOT NULL,
    "modified_date" VARCHAR(100) NOT NULL,
    PRIMARY KEY ("id"),
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