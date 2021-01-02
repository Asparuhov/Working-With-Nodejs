const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-practice',
    password: 'Krisi0143171864a'
});

module.exports = pool.promise();