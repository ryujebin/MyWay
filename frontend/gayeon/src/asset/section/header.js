import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="home_logo">
        <img src="/images/my_way_logo.png" className="logo_image" alt="Logo"/>
      </div>
      <nav>
        <ul className="nav-links">
          <li className="dropdown">
            <a href="#!">
              산책로 <span className="arrow">v</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#!">산책로</a>
              </li>
              <li>
                <a href="#!">산책로 등록</a>
              </li>
              <li>
                <a href="#!">산책로 관리</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
