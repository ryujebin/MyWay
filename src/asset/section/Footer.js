import React from "react";
import { Link } from "react-router-dom";
import logo from "../../components/images/logo.PNG";
import googlePlay from "../../components/images/googleplay.PNG";
import appStore from "../../components/images/appstore.PNG";
import instagram from "../../components/images/instagram.PNG";
import youtube from "../../components/images/youtube.PNG";

const Footer = () => {
  return (
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
              <a href="/map">산책로</a>
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
              <a href="/QandA">고객센터</a>
            </li>
            <li>
              <a href="/service">자주 묻는 질문</a>
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
      <div className="copyright">&copy; LIKELION UNIV. SCNU 12TH 워크홀릭</div>
    </footer>
  );
};

export default Footer;
