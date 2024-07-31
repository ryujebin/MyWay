// 경로 모델
const db = require('../config/db');

const PathModel = {
    savePath: (path, callback) => {
        const sql = 'INSERT INTO paths (path) VALUES (?)';
        db.query(sql, [path], (err, result) => {
            if (err) {
                console.error('Error executing query:', err.stack);
                return callback(err);
            }
            callback(null, result);
        });
    },
    loadPaths: (callback) => {
        const sql = 'SELECT path FROM paths';
        db.query(sql, (err, results) => {
            if (err) {
                console.error('Error executing query:', err.stack);
                return callback(err);
            }
            const paths = results.map(row => row.path);
            callback(null, paths);
        });
    }
};

module.exports = PathModel;