const Client = require("pg").Pool;
const fs = require("fs");

function readJsonFile(file) {
  let bufferData = fs.readFileSync(file);
  let stData = bufferData.toString();
  let data = JSON.parse(stData);
  return data;
}
const file = readJsonFile("./config/config.json");

const pool = {
  host: file.host,
  user: file.user,
  password: file.password,
  port: file.port,
};
const client = new Client(pool);

const dbName = file.database;
const createDatabase = async () => {
  try {
    await client.connect(); // gets connection
    await client.query(`CREATE DATABASE ${dbName}`); // sends queries
    console.log("Database Dibuat");
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  } finally {
    client.end(); // closes connection
    process.exit(0); // Used to exit from the node.js application with a success status code.
  }
};

createDatabase();
