// 유저 컨트롤러
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const UserModel = require('../models/userModel');

const userController = {
    register: (req, res) => {
        console.log('Received body:', req.body); // 요청 데이터 확인
        const { username, userid, password } = req.body;

        // 유효성 검사
        if (!username || !userid || !password) {
            return res.status(400).send('모든 필드를 입력해 주세요.');
        }

        // 아이디 중복 확인
        UserModel.findByUserId(userid, (err, results) => {
            if (err) return res.status(500).send('Server error');
            if (results.length > 0) {
                return res.status(400).send('Userid already exists');
            }

            // 비밀번호 해시화
            const hashedPassword = bcrypt.hashSync(password, 8);

            // 모델에 해시된 비밀번호 전달
            User.createUser(username, userid, hashedPassword, (err) => {
                if (err) return res.status(500).send('Server error');
                res.status(201).send('User registered successfully');
            });
        });
    },

    login: (req, res) => {
        const { userid, password } = req.body;

        // 유효성 검사
        if (!userid || !password) {
            return res.status(400).send('모든 필드를 입력해 주세요.');
        }

        // 아이디로 사용자 찾기
        UserModel.findByUserId(userid, (err, results) => {
            if (err) return res.status(500).send('Server error');
            if (results.length === 0) {
                return res.status(400).send('Userid not found');
            }

            // 비밀번호 확인
            const user = results[0];
            const isValidPassword = bcrypt.compareSync(password, user.password);
            if (!isValidPassword) {
                return res.status(400).send('Invalid password');
            }

            // 로그인 성공 시 사용자 정보 반환
            res.status(200).send({
                message: 'Login successful',
                user: {
                    username: user.username,
                    userid: user.userid
                }
            });
        });
    }
};

    module.exports = userController;