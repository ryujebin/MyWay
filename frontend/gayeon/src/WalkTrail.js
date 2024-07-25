import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function WalkTrail() {
  return (
    <div>
      <header>
        <div className="home_logo">
          <img src="images/my_way_logo.png" className="logo_image" alt="Logo" />
        </div>
        <nav>
          <ul className="nav-list">
            <li><Link to="/walktrail" className="tap_button1">산책로</Link></li>
            <li><Link to="/community" className="tap_button1">커뮤니티</Link></li>
            <li><Link to="/person" className="tap_button2">마이페이지</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="banner_bar">
          <img src="images/banner.png" className="banner_image" alt="Banner" />
        </div>
        <nav>
          <ul className="nav-list">
            <li><Link to="/person" className="list">개인정보 관리</Link></li>
            <li><Link to="/walktrail" className="list">산책로 관리</Link></li>
            <li><Link to="/service" className="list">고객센터</Link></li>
          </ul>
        </nav>
        <hr style={{ width: '90%' }} />
        <section className="walk_trail">
          <div className="box1">나의 산책로 목록</div>
          <section className="post">
            <div className="box2">
              <div className="walk_trail_image">
                <img src="/images/walk_trail_image1.gif" style={{ width: '100px', margin: '10px' }} alt="Walk Trail 1" />
              </div>
              <div className="walk_trail_body">
                <h1>와온 해변</h1>
                <p>전라남도 순천시 해룡면 와온 마을에 위치해 있으며 해가 지고 있는 저녁 노을로 유명한 명소</p>
                <p>#노을뷰 #산책로</p>
              </div>
              <div className="setting_button_container">
                <button className="setting_button">수정</button>
                <button className="setting_button">삭제</button>
              </div>
            </div>
            <div className="box2">
              <div className="walk_trail_image">
                <img src="/images/walk_trail_image2.gif" style={{ width: '100px', margin: '10px' }} alt="Walk Trail 2" />
              </div>
              <div className="walk_trail_body">
                <h1>북정 매화마을</h1>
                <p>전라남도 순천시 매곡동 탐매마을에 위채해 있으며 매화가 이쁜 명소</p>
                <p>#매화 #산책로</p>
              </div>
              <div className="setting_button_container">
                <button className="setting_button">수정</button>
                <button className="setting_button">삭제</button>
              </div>
            </div>
          </section>
        </section>

        <section className="walk_trail">
          <div className="box1">즐겨찾기한 산책로 목록</div>
          <section className="post">
            <div className="box2">
              <div className="walk_trail_image">
                <img src="/images/liked_trail_image1.jpg" style={{ width: '100px', margin: '10px' }} alt="Walk Trail 1" />
              </div>
              <div className="walk_trail_body">
                <h1>국가정원</h1>
                <p>전라남도 순천시 국가정원으로 가족, 연인과 산책하기에 좋은 산책로</p>
                <p>#피크닉 #인생사진 #데이트</p>
              </div>
              <div className="setting_button_container">
                <button className="setting_button">수정</button>
                <button className="setting_button">삭제</button>
              </div>
            </div>
            <div className="box2">
              <div className="walk_trail_image">
                <img src="/images/liked_trail_image2.jpg" style={{ width: '100px', margin: '10px' }} alt="Walk Trail 2" />
              </div>
              <div className="walk_trail_body">
                <h1>워크홀릭의 알쓸산잡1</h1>
                <p>알아두면 쓸데있는 산책로 잡지식</p>
                <p>#강가산책 #반려견 산책</p>
              </div>
              <div className="setting_button_container">
                <button className="setting_button">수정</button>
                <button className="setting_button">삭제</button>
              </div>
            </div>
            <div className="box2">
              <div className="walk_trail_image">
                <img src="/images/liked_trail_image2.jpg" style={{ width: '100px', margin: '10px' }} alt="Walk Trail 2" />
              </div>
              <div className="walk_trail_body">
                <h1>워크홀릭의 알쓸산잡7</h1>
                <p>알아두면 쓸데있는 산책로 잡지식</p>
                <p>#강가산책 #반려견 산책</p>
              </div>
              <div className="setting_button_container">
                <button className="setting_button">수정</button>
                <button className="setting_button">삭제</button>
              </div>
            </div>
            <div className="box2">
              <div className="walk_trail_i/images/liked_trail_image1.jpgmage">
                <img src="/images/liked_trail_image3.jpg" style={{ width: '100px', margin: '10px' }} alt="Walk Trail 1" />
              </div>
              <div className="walk_trail_body">
                <h1>워크홀릭의 알쓸산잡7</h1>
                <p>알아두면 쓸데있는 산책로 잡지식</p>
                <p>#낭만가득 #인생사진</p>
              </div>
              <div className="setting_button_container">
                <button className="setting_button">수정</button>
                <button className="setting_button">삭제</button>
              </div>
            </div>
          </section>
        </section>
        <div className="register_button_container">
          <Link to="/NewWalkTrail.js" className="button-box">산책로 등록 바로가기</Link>
        </div>
      </main>
      <footer>
        <button className="creator-button">LIKE UNIV.SCNU 12TH 워크홀릭</button>
      </footer>
    </div>
  );
}

export default WalkTrail;
