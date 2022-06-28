const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'joaopedrocode',
    password: '347542',
    database: 'LookingForPets'
});

module.exports = pool;