// src/components/CommunityPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header"; // Header import
import "./CommunityPage.scss";
import logo from "./images/logo.PNG";
import bannerImage from "../images/banner.PNG";
import googlePlay from "../images/googleplay.PNG";
import appStore from "../images/appstore.PNG";
import instagram from "../images/instagram.PNG";
import youtube from "../images/youtube.PNG";

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
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-column footer-logo">
            <img src={logo} alt="MyWay Logo" />
            <div className="footer-app-links">
              <a href="https://play.google.com/store">
                <img src={googlePlay} alt="Google Play" />
              </a>
              <a href="https://www.apple.com/app-store/">
                <img src={appStore} alt="App Store" />
              </a>
            </div>
            <div className="footer-social">
              <a href="https://instagram.com/takkk_2">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://youtube.com" className="youtube-button">
                <img src={youtube} alt="YouTube" />
              </a>
              <a href="#!" className="producer-button">
                제작자
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>MyWay</h3>
            <ul>
              <li>
                <a href="#!">MyWay 소개</a>
              </li>
              <li>
                <a href="https://instagram.com/takkk_2">MyWay Instagram</a>
              </li>
              <li>
                <a href="https://youtube.com">MyWay Youtube</a>
              </li>
              <li>
                <a href="#!">MyWay Producer</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>주요서비스</h3>
            <ul>
              <li>
                <a href="#!">산책로</a>
              </li>
              <li>
                <Link to="/community">커뮤니티</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>제휴업체</h3>
            <ul>
              <li>
                <a href="https://code01cafe.modoo.at/">코드 0.1</a>
              </li>
              <li>
                <a href="https://www.siksinhot.com/P/1312124">킁킁분식</a>
              </li>
              <li>
                <a href="https://map.naver.com/p/search/%EC%95%8C%ED%94%84%EC%8A%A4%EB%8B%B9%EA%B5%AC%EC%9E%A5/place/17301667?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place">
                  알프스당구장
                </a>
              </li>
              <li>
                <a href="https://map.naver.com/p/entry/place/17030596?lng=127.48645&lat=34.969181&placePath=%2Fhome&entry=plt&searchType=place">
                  춘천거시기닭갈비
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>지원 및 서비스</h3>
            <ul>
              <li>
                <a href="/community">공지사항</a>
              </li>
              <li>
                <a href="#!">고객센터</a>
              </li>
              <li>
                <a href="#!">자주 묻는 질문</a>
              </li>
              <li>
                <a href="#!">광고문의</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>개인정보처리방침</h3>
            <ul>
              <li>
                <a href="#!">이용약관</a>
              </li>
              <li>
                <a href="#!">위치기반 서비스 이용약관</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; LIKELION UNIV. SCNU 12TH 워크홀릭
        </div>
      </footer>
    </div>
  );
};

export default CommunityPage;
