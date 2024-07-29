import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="home_logo">
        <img src="/images/my_way_logo.png" className="logo_image" alt="Logo"/>
        <nav className='mypage-button'>
        <ul className="nav-links">
          <li className="dropdown">
            <a href="#!">
              산책로 <span className="arrow">v</span>
            </a>
            <ul className="dropdown-menu">
              <li><Link to="/walktrail">산책로</Link></li>
              <li><Link to="/newwalktrail">산책로 등록</Link></li>
              <li><a href="#!">산책로 관리</a></li>
            </ul>
          </li>
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </ul>
      </nav>
      </div>
      
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
      <hr />
    </header>
  );
}

export default Header;
