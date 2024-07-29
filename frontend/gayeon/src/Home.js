import React from 'react';
import { Link } from 'react-router-dom';
import Header from './asset/section/header';
import Footer from './asset/section/footer';

function Home() {
  return (
    <div>
      <Header />
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
      <Footer />
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


