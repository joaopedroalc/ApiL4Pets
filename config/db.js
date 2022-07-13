const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Jp347542',
    database: 'LookingForPets'
});

module.exports = pool;