const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'hiolabsDB',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: 'hio_db',
    port: '3306',
    user: 'root',
    password: '123456789',
    dateStrings: true
};
