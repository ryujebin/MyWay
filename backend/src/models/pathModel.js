// 경로 모델
const db = require('../../config/db');

const PathModel = {
    savePath: (path, callback) => {
        const sql = 'INSERT INTO trails (path, distance, finishtime) VALUES (?, ?, ?)';
        db.query(sql, [path, distance, finishtime], (err, result) => {
            if (err) {
                console.error('Error executing query:', err.stack);
                return callback(err);
            }
            callback(null, result);
        });
    },
    loadPaths: (callback) => {
        const sql = 'SELECT path FROM trails';
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