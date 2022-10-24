const client = require("../config/config");

const createTableUser = async () => {
  try {
    await client.connect();
    await client.query(`CREATE TABLE "users" (
        "id" SERIAL PRIMARY KEY,
        "email" VARCHAR(100) UNIQUE NOT NULL,
        "password" VARCHAR(100) NOT NULL
    );`);
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  }
};

const createTableRefletions = async () => {
  try {
    await client.query(`CREATE TABLE "reflections" (
        "id" SERIAL PRIMARY KEY,
        "success" VARCHAR(100) NOT NULL,
        "low_point" VARCHAR(100) NOT NULL,
        "take_away" VARCHAR(100) NOT NULL,
        "owner_id" INTEGER NOT NULL,
        "created_date" TIMESTAMP NOT NULL,
        "modified_date" TIMESTAMP NOT NULL,
        FOREIGN KEY ("owner_id") REFERENCES "users" ("id")
    );`);
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  } finally {
    client.end();
  }
};

createTableUser().then((result) => {
  if (result) {
    console.log("Table user created");
    createTableRefletions().then((result) => {
      if (result) {
        console.log("Table refelections created");
        process.exit(0); // Used to exit from the node.js application with a success status code.
      }
    });
  }
});
