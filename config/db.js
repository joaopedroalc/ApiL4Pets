const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bf001df63aee3e',
    password: '0c2d9bee',
    database: 'heroku_e6d60efc1cc8183'
});

module.exports = pool;