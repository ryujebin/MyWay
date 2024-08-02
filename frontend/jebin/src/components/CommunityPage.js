import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CommunityPage.scss";
import logo from "./images/logo.PNG";
import bannerImage from "./images/banner.PNG";
import googlePlay from "./images/googleplay.PNG";
import appStore from "./images/appstore.PNG";
import instagram from "./images/instagram.PNG";
import youtube from "./images/youtube.PNG";

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState("notice");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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
                <h3>여행 중 만난 아름다운 길</h3>
                <span className="views">조회수: 345</span>
              </div>
              {expandedIndex === 5 && (
                <div className="post-details">
                  <p>
                    최근 여행 중에 만난 길이 정말 아름다웠습니다. 사진과 함께
                    공유할게요!
                  </p>
                </div>
              )}
            </div>
          )}
          {activeTab === "qa" && (
            <div className="qa-content">
              <div className="qa-item" onClick={() => toggleExpanded(6)}>
                <h3>산책로 추천 부탁드립니다.</h3>
                <span className="views">조회수: 123</span>
              </div>
              {expandedIndex === 6 && (
                <div className="qa-details">
                  <p>
                    산책로 추천해주실 수 있나요? 새로운 곳을 찾고 있어서요.
                  </p>
                </div>
              )}
              <div className="qa-item" onClick={() => toggleExpanded(7)}>
                <h3>산책 중 주의할 점</h3>
                <span className="views">조회수: 456</span>
              </div>
              {expandedIndex === 7 && (
                <div className="qa-details">
                  <p>
                    산책 중 주의할 점이나 팁이 있으면 공유해 주세요.
                  </p>
                </div>
              )}
              <div className="qa-item" onClick={() => toggleExpanded(8)}>
                <h3>산책로 관련 법규</h3>
                <span className="views">조회수: 789</span>
              </div>
              {expandedIndex === 8 && (
                <div className="qa-details">
                  <p>
                    산책로와 관련된 법규나 규정에 대해 알고 싶습니다.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="MyWay" />
          </div>
          <div className="footer-links">
            <a href="https://play.google.com/store/apps/details?id=com.example.app">
              <img src={googlePlay} alt="Google Play" />
            </a>
            <a href="https://apps.apple.com/us/app/id1234567890">
              <img src={appStore} alt="App Store" />
            </a>
          </div>
          <div className="footer-social">
            <a href="https://www.instagram.com/example">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/example">
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityPage;
