// pathModel.js
const db = require('../../config/db');

const PathModel = {
    savePath: (path, distance, finishtime, callback) => {
        const sql = 'INSERT INTO trails (path, distance, finishtime) VALUES (?, ?, ?)';
        const pathString = JSON.stringify(path); // JSON 배열을 문자열로 변환

        console.log('Executing SQL:', sql);
        console.log('Parameters:', [pathString, distance, finishtime]);

        db.query(sql, [pathString, distance, finishtime], (err, result) => {
            if (err) {
                console.error('Error executing query:', err.stack);
                return callback(err);
            }
            console.log('Query result:', result);
            callback(null, result);
        });
    },
    loadPaths: (callback) => {
        const sql = 'SELECT path FROM trails';

        console.log('Executing SQL:', sql);

        db.query(sql, (err, results) => {
            if (err) {
                console.error('Error executing query:', err.stack);
                return callback(err);
            }

            const paths = results.map(row => JSON.parse(row.path)); // JSON 문자열을 객체로 변환
            console.log('Query results:', results);
            console.log('Parsed paths:', paths);

            callback(null, paths);
        });
    }
};

module.exports = PathModel;
