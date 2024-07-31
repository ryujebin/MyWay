const express = require('express');
const app = express();
require('dotenv').config();
const port = 5000;

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
const mapRoutes = require('./frontend/routes/mapRoutes'); 
const pathRoutes = require('./backend/routes/pathRoutes');

// 라우터 사용
app.use('/', mapRoutes); 
app.use('/api/paths', pathRoutes);

