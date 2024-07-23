const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 32567
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'svc.sel4.cloudtype.app',
    user: 'root',
    password: '1234',
    database: 'map_paths'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.render('map');
});

app.get('/', (req, res) => {
    res.render('../views/map', {apiKey: process.env.KAKAO_API_KEY})
  })


app.post('/save_path', (req, res) => {
    const path = req.body.path;
    console.log('Received path:', path); // 경로 데이터 확인

    // SQL 쿼리와 데이터를 로그로 출력
    const sql = 'INSERT INTO paths (path) VALUES (?)';
    console.log('Executing SQL:', sql);
    console.log('With data:', [path]);

    db.query(sql, [path], (err, result) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Error saving path');
            return;
        }
        res.send('Path saved successfully');
    });
});

app.get('/load_paths', (req, res) => {
    const sql = 'SELECT path FROM paths';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Error loading paths');
            return;
        }
        const paths = results.map(row => row.path);
        res.json(paths);
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })