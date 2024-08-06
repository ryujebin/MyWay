const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = 3000;

// cors 미들웨어 사용 -> 백엔드와 프론트엔드가 서로 다른 포트에서 실행
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './frontend/views');
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

// 라우터 가져오기
const pathRoutes = require('./routes/pathRoutes');
const userRoutes = require('./routes/userRoutes');

// 라우터 사용
app.use('/api/paths', pathRoutes);
app.use('/api/users', userRoutes);

