const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'usuario',
    password: 'pass',
    database: 'lookingforpets'
});

module.exports = pool;