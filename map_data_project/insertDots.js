const mysql = require('mysql');

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'svc.sel4.cloudtype.app',
  port: '32567', 
  user: 'root',  // MySQL 사용자 이름
  password: '1234',  // MySQL 비밀번호
  database: 'map_data'  // 사용할 데이터베이스 이름
});

connection.connect();

// dots 배열 예제
const dots = [
  {circle: {latitude: 33.450701, longitude: 126.570667}, distance: null},
  {circle: {latitude: 33.451701, longitude: 126.571667}, distance: 100}
];

// dots 배열의 데이터를 MySQL 테이블에 삽입하는 함수
function insertDotsData(dots) {
  dots.forEach
}