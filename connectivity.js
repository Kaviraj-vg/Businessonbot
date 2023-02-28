const {Client} = require('pg');

const client = new Client({
    user:"postgres",
    password:"kaviraj2003",
 connectionString: "postgres://postgres:kaviraj2003@localhost:5432/postgres",
 ssl: true
});

module.exports = client
