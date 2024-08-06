const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'svc.sel4.cloudtype.app',
    user: 'root',
    password: '1234',
    database: 'myway',
    port: 30092
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

module.exports = db;