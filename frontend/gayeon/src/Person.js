import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Person() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleClick = (path) => {
    navigate(path);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSaveChanges = () => {
    console.log('비밀번호 저장:', password);
    console.log('이메일 저장:', email);
    console.log('전화번호 저장:', phoneNumber);
    // 여기서 각 입력 값을 저장하거나 처리하는 로직을 추가하세요.
  };

  return (
    <div>
      <header>
        <div className="home_logo">
          <img src="/images/my_way_logo.png" className="logo_image" alt="Logo" />
        </div>
        <nav>
          <ul className="nav-list">
            <li><Link to="/walktrail" className="tap_button1">산책로</Link></li>
            <li><Link to="/community" className="tap_button1">커뮤니티</Link></li>
            <li><Link to="/person" className="tap_button2">마이페이지</Link></li>
          </ul>
        </nav>
      </header>
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
        <hr style={{ width: '90%' }} />
        <section style={{ margin: '150px 0px' }}>
          <hr style={{ width: '25%' }} />
          <section className="person_information">
            <div className="settle">
              <span>프로필</span>
            </div>
            <div className="set">
              <button onClick={() => handleClick('/Setting.js')}>프로필 사진 변경</button>
            </div>
          </section>
          <hr style={{ width: '25%' }} />
          <section className="person_information">
            <div className="settle">
              <span>비밀번호</span>
            </div>
            <div className="set">
              <input 
                type="password" 
                value={password} 
                onChange={handlePasswordChange} 
                placeholder="비밀번호를 입력하시오." 
              />
            </div>
          </section>
          <hr style={{ width: '25%' }} />
          <section className="person_information">
            <div className="settle">
              <span>이메일</span>
            </div>
            <div className="set">
              <input 
                type="email" 
                value={email} 
                onChange={handleEmailChange} 
                placeholder="이메일을 입력하시오." 
              />
            </div>
          </section>
          <hr style={{ width: '25%' }} />
          <section className="person_information">
            <div className="settle">
              <span>전화번호</span>
            </div>
            <div className="set">
              <input 
                type="tel" 
                value={phoneNumber} 
                onChange={handlePhoneNumberChange} 
                placeholder="전화번호를 입력하시오." 
              />
            </div>
          </section>
          <hr style={{ width: '25%' }} />
          <div className="centered-button">
            <button onClick={handleSaveChanges}>변경사항 저장</button>
          </div>
        </section>
      </main>
      <footer>
        <button className="creator-button">LIKE UNIV.SCNU 12TH 워크홀릭</button>
      </footer>
    </div>
  );
}

export default Person;
