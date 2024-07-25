import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Service() {
  return (
    <div>
      <header>
        <div className="home_logo">
          <img src="/images/my_way_logo.png" className="logo_image" alt="Logo" />
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
          <img src="/images/banner.png" className="banner_image" alt="Banner" />
        </div>
        <nav>
          <ul className="nav-list">
            <li><Link to="/person" className="list">개인정보 관리</Link></li>
            <li><Link to="/walktrail" className="list">산책로 관리</Link></li>
            <li><Link to="/service" className="list">고객센터</Link></li>
          </ul>
        </nav>
        <hr style={{ width: '90%' }}/>
        <div className="QandA_box">
          <h2 style={{ fontSize: '25px' }}>자주 묻는 질문</h2>
          <ul className="nav-list" style={{ listStyleType: 'none' }}>
            <li><Link to="/QandA" className="QandA_list">산책로 등록을 하면 뭐가 좋나요 ?</Link></li>
            <hr />
            <li><Link to="/QandA" className="QandA_list">제휴업체 사용은 어떻게 하나요 ?</Link></li>
            <hr />
            <li><Link to="/QandA" className="QandA_list">산책로 등록 시 사진을 꼭 첨부해야 하나요 ?</Link></li>
            <hr />
            <li><Link to="/QandA" className="QandA_list">GPS 기능이 잘 안돼요 !</Link></li>
            <hr />
          </ul>
        </div>
      <div className="register_button_container">
        <span style={{margin:"15px"}}>도움이 필요하신가요 ?</span>
        <Link to="/NewWalkTrail.js" className="button-box">문의하기</Link>
      </div>
      </main>
      <footer>
        <button className="creator-button">LIKE UNIV.SCNU 12TH 워크홀릭</button>
      </footer>
    </div>
  );
}

export default Service;
