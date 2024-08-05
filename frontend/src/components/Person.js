import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Person() {
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleProfileImageChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const handleSaveChanges = () => {
    console.log('비밀번호 저장:', password);
    console.log('프로필 이미지 저장:', profileImage);
    // 여기서 각 입력 값을 저장하거나 처리하는 로직을 추가하세요.
  };

  return (
    <div>
      <main>
        <section class="banner-bar">
          <h1 className='banner-words'>' 산책이 일상으로 '</h1>
          <span class="mypage">MYPAGE</span>
        </section>
        <nav>
          <ul className="nav-list">
            <li><Link to="/person" className="list">개인정보 관리</Link></li>
            <li><Link to="/walktrail" className="list">산책로 관리</Link></li>
            <li><Link to="/service" className="list">고객센터</Link></li>
          </ul>
        </nav>
        <hr />
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
          <div className="centered-button">
            <button onClick={handleSaveChanges}>변경사항 저장</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Person;
