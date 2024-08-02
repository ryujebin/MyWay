// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.PNG";
import mypageIcon from "../images/mypage.PNG";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="left-container">
        <Link to="/" className="logo">
          <img src={logo} alt="MyWay Logo" />
        </Link>
        <nav className="nav-container">
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
      </div>
      <Link to="/mypage" className="mypage-button">
        <img src={mypageIcon} alt="마이페이지" className="mypage-icon" />
        <span>마이페이지</span>
      </Link>
    </header>
  );
};

export default Header;
