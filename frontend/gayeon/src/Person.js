import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './asset/section/header';
import Footer from './asset/section/footer';

function Person() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImage, setProfileImage] = useState(null);

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

  const handleProfileImageChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const handleSaveChanges = () => {
    console.log('비밀번호 저장:', password);
    console.log('이메일 저장:', email);
    console.log('전화번호 저장:', phoneNumber);
    console.log('프로필 이미지 저장:', profileImage);
    // 여기서 각 입력 값을 저장하거나 처리하는 로직을 추가하세요.
  };

  return (
    <div>
      <Header />
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
        <section style={{ margin: '40px 0px' }}>
          <hr style={{ width: '30%' }} />
          <section className="person_information">
            <div className="settle">
              <span>프로필</span>
            </div>
            <div className="set">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleProfileImageChange} 
              />
              {profileImage && (
                <div>
                  <img 
                    src={URL.createObjectURL(profileImage)} 
                    alt="프로필 미리보기" 
                    style={{ width: '100px', height: '100px', marginTop: '10px' }} 
                  />
                </div>
              )}
            </div>
          </section>
          <hr style={{ width: '30%' }} />
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
          <hr style={{ width: '30%' }} />
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
          <hr style={{ width: '30%' }} />
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
          <hr style={{ width: '30%' }} />
          <div className="centered-button">
            <button onClick={handleSaveChanges}>변경사항 저장</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Person;
