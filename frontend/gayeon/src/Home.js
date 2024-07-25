import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <header>
        <div className="home_logo">
          <img src="/images/my_way_logo.png" className="logo_image" alt="Logo"/>
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
        <hr style={{ width: '90%'}}/>
      </main>
      <footer>
        <button className="creator-button">제작자</button>
      </footer>
    </div>
  );
}

export default Home;

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.side_nav .list');

  listItems.forEach(item => {
      item.addEventListener('click', function(event) {
          // 모든 항목에서 clicked 클래스 제거
          listItems.forEach(i => i.classList.remove('clicked'));
          
          // 클릭한 항목에 clicked 클래스 추가
          this.classList.add('clicked');
      });
  });
});

