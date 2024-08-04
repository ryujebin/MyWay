import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyWay</Link>
      </div>
      <nav className="nav">
        <ul className="left-nav">
          <li>
            <Link to="/" onClick={toggleDropdown} className="combined-button">
              산책로
              <img
                src={process.env.PUBLIC_URL + "/img/dropdownbtn.png"}
                alt="Toggle Dropdown"
                className="dropdown-icon"
              />
            </Link>
            {dropdownOpen && (
              <div className="dropdown-content">
                <p>
                  <Link to="/map">산책로</Link>
                </p>
                <p>
                  <Link to="/register">산책로 등록</Link>
                </p>
                <p>
                  <Link to="/manage">산책로 관리</Link>
                </p>
              </div>
            )}
          </li>
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
        </ul>
        <ul className="right-nav">
          <li>
            <Link to="/mypage" className="mypage-link">
              <img
                src={process.env.PUBLIC_URL + "/img/Profile.png"}
                alt="마이페이지"
                className="mypage-image"
              />
              <span>마이페이지</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
