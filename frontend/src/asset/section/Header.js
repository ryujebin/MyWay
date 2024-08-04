import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../components/images/Profile.png";
import dropdownbtn from "../../components/images/dropdownbtn.png"; // 이미지 경로 수정

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
            <Link
              to="/Login"
              onClick={toggleDropdown}
              className="combined-button"
            >
              산책로
              <img
                src={dropdownbtn}
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
                  <Link to="/NewWalkTrail">산책로 등록</Link>
                </p>
                <p>
                  <Link to="/walktrail">산책로 관리</Link>
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
            <Link to="/person" className="mypage-link">
              <img src={profile} alt="마이페이지" className="mypage-image" />
              <span>마이페이지</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
