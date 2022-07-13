const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'thiagoone',
    password: 'Thiago0406@',
    database: 'LookingForPets'
});

module.exports = pool;