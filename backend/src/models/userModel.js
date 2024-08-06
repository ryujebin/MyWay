// 유저 모델
const db = require('../../config/db');

const UserModel = {
    // Id 이용해서 유저 찾기
    findByUserId: (userid, callback) => {
        const sql = 'SELECT * FROM users WHERE userid = (?)';
        db.query(sql, [userid], (err, result) => {
            if (err) {
                console.error('Error executing query:', err.stack);
                return callback(err);
            }
            callback(null, result);
        });
    },
    // 회원 생성
    createUser: (username, userid, hashedPassword, callback) => {
        const sql = 'INSERT INTO users (username, userid, password) VALUES (?, ?, ?)';
        console.log('Executing SQL:', sql, 'username:', username, 'with userid:', userid, 'hashedPassword:', hashedPassword); // 쿼리와 파라미터 출력
        db.query(sql, [username, userid, hashedPassword], (err, results) => {
            if (err) {
                console.error('Error executing query:', err.stack);
                return callback(err);
            }
            const userId = results.insertId; // insertId를 사용하여 삽입된 ID를 가져옴
            callback(null, userId);
        });
    }
};

module.exports = UserModel;