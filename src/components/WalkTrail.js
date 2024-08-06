import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../asset/scss/a/WalkTrail.scss"; // SCSS 파일을 가져오는 경로 수정

function WalkTrail() {
  const [walkTrails, setWalkTrails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/walktrails"); // 실제 API 엔드포인트로 변경하세요.
        setWalkTrails(response.data);
      } catch (error) {
        console.error("산책로 데이터를 가져오는 중 오류 발생", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <section className="banner-bar">
        <h1 className="banner-words">' 산책이 일상으로 '</h1>
        <span className="mypage">MYPAGE</span>
      </section>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/person" className="list">
              개인정보 관리
            </Link>
          </li>
          <li>
            <Link to="/walktrail" className="list">
              산책로 관리
            </Link>
          </li>
          <li>
            <Link to="/service" className="list">
              고객센터
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <main>
        <section className="walk_trail">
          <div className="box1">나의 산책로 목록</div>
          <section className="post">
            {walkTrails.length === 0 ? (
              <div className="no-trails-message">나의 산책로가 없습니다</div>
            ) : (
              walkTrails.map((trail) => (
                <div className="box2" key={trail.id}>
                  <div className="walk_trail_image">
                    <img
                      src={trail.image}
                      style={{ width: "100px", margin: "10px" }}
                      alt={trail.name}
                    />
                  </div>
                  <div className="walk_trail_body">
                    <h1>{trail.name}</h1>
                    <p>{trail.description}</p>
                    <p>{trail.tags}</p>
                  </div>
                  <div className="setting_button_container">
                    <button className="setting_button">수정</button>
                    <button className="setting_button">삭제</button>
                  </div>
                </div>
              ))
            )}
          </section>
        </section>
        <div className="register_button_container">
          <Link to="/map" className="button-box">
            산책로 등록 바로가기
          </Link>
        </div>
      </main>
    </div>
  );
}

export default WalkTrail;
