// 메인 라우터
const express = require('express');
const router = express.Router();

// map.ejs로 라우팅
router.get('/', (req, res) => {
    res.render('map', { apiKey: process.env.KAKAO_API_KEY });
});

module.exports = router;