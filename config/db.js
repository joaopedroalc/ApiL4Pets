const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'lookingforpets'
});

module.exports = pool;