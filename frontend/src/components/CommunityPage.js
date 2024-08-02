// src/components/CommunityPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header"; // Header import
import Footer from "./Footer"; // Footer import
import "./CommunityPage.scss";
import bannerImage from "../images/banner.PNG";

const CommunityPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("notice");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    setActiveTab("notice");
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setExpandedIndex(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="community-page">
      <Header /> {/* Use Header component */}
      <div className="banner">
        <img src={bannerImage} alt="산책이 일상으로" className="banner-image" />
      </div>
      <div className="community-content">
        <div className="tabs">
          <ul>
            <li
              className={activeTab === "notice" ? "active" : ""}
              onClick={() => handleTabClick("notice")}
            >
              공지사항
            </li>
            <li
              className={activeTab === "freeboard" ? "active" : ""}
              onClick={() => handleTabClick("freeboard")}
            >
              자유게시판
            </li>
            <li
              className={activeTab === "qa" ? "active" : ""}
              onClick={() => handleTabClick("qa")}
            >
              Q&A
            </li>
          </ul>
          {activeTab === "freeboard" && (
            <Link to="/write" className="write-button">
              글쓰기
            </Link>
          )}
          {activeTab === "qa" && (
            <Link to="/inquire" className="inquire-button">
              문의하기
            </Link>
          )}
        </div>
        <hr className="tab-divider" />
        <div className="search-container">
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <button className="clear-button" onClick={clearSearch}>
              ×
            </button>
          )}
        </div>
        <div className="tab-content">
          {activeTab === "notice" && (
            <div className="notice-content">
              <div className="notice-item" onClick={() => toggleExpanded(0)}>
                <p>산책하Go! 기부하Go! 산책 챌린지</p>
                <span className="views">조회수: 1234</span>
              </div>
              {expandedIndex === 0 && (
                <div className="notice-details">
                  <p>
                    여기에 글의 정보를 추가하세요. 이 부분은 제목을 클릭했을 때
                    보이게 됩니다.
                  </p>
                </div>
              )}
              <div className="notice-item" onClick={() => toggleExpanded(1)}>
                <p>[대회일정] 순천시 남승룡 마라톤 대회 참여자 모집</p>
                <span className="views">조회수: 5678</span>
              </div>
              {expandedIndex === 1 && (
                <div className="notice-details">
                  <p>
                    여기에 글의 정보를 추가하세요. 이 부분은 제목을 클릭했을 때
                    보이게 됩니다.
                  </p>
                </div>
              )}
              <div className="notice-item" onClick={() => toggleExpanded(2)}>
                <p>[대회일정] 2024 섬섬 여수 그란폰도 대회 참여자 모집</p>
                <span className="views">조회수: 9101</span>
              </div>
              {expandedIndex === 2 && (
                <div className="notice-details">
                  <p>
                    여기에 글의 정보를 추가하세요. 이 부분은 제목을 클릭했을 때
                    보이게 됩니다.
                  </p>
                </div>
              )}
            </div>
          )}
          {activeTab === "freeboard" && (
            <div className="freeboard-content">
              <div className="post-item" onClick={() => toggleExpanded(3)}>
                <h3>새로운 산책로 발견!</h3>
                <span className="views">조회수: 231</span>
              </div>
              {expandedIndex === 3 && (
                <div className="post-details">
                  <p>
                    어제 동네에서 새로운 산책로를 발견했어요. 너무 예쁘고
                    조용해서 추천합니다!
                  </p>
                </div>
              )}
              <div className="post-item" onClick={() => toggleExpanded(4)}>
                <h3>강아지와 함께 산책하기 좋은 곳</h3>
                <span className="views">조회수: 198</span>
              </div>
              {expandedIndex === 4 && (
                <div className="post-details">
                  <p>
                    강아지와 함께 산책하기 좋은 산책로를 찾았어요. 강아지들이
                    좋아할 만한 곳이 많아서 추천드려요.
                  </p>
                </div>
              )}
              <div className="post-item" onClick={() => toggleExpanded(5)}>
                <h3>산책로 청소 활동 후기</h3>
                <span className="views">조회수: 145</span>
              </div>
              {expandedIndex === 5 && (
                <div className="post-details">
                  <p>
                    지난 주말에 산책로 청소 활동에 참여했어요. 많은 분들이 함께
                    해주셔서 산책로가 깨끗해졌어요!
                  </p>
                </div>
              )}
            </div>
          )}
          {activeTab === "qa" && (
            <div className="qa-content">
              <div className="qa-item" onClick={() => toggleExpanded(6)}>
                <h3>새로운 산책로 등록은 어떻게 하나요?</h3>
                <span className="views">조회수: 104</span>
              </div>
              {expandedIndex === 6 && (
                <div className="qa-details">
                  <p>산책로 등록을 위해 어떤 절차를 거쳐야 하나요?</p>
                </div>
              )}
              <div className="qa-item" onClick={() => toggleExpanded(7)}>
                <h3>산책로 관리 방법이 궁금해요</h3>
                <span className="views">조회수: 87</span>
              </div>
              {expandedIndex === 7 && (
                <div className="qa-details">
                  <p>산책로를 자주 이용하는데, 관리는 어떻게 하면 좋을까요?</p>
                </div>
              )}
              <div className="qa-item" onClick={() => toggleExpanded(8)}>
                <h3>산책로 안전 관련 문의</h3>
                <span className="views">조회수: 123</span>
              </div>
              {expandedIndex === 8 && (
                <div className="qa-details">
                  <p>
                    산책로를 이용할 때 안전하게 이용할 수 있는 방법이
                    궁금합니다.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer /> {/* Use Footer component */}
    </div>
  );
};

export default CommunityPage;
