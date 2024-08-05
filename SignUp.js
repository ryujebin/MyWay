import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSignUpClick = () => {
    // 모든 필드가 입력되었는지 확인
    if (!username || !userid || !password) {
      setErrorMessage('정보를 정확하게 입력해주시길 바랍니다.');
      return;
    }

    // 예시로 가정된 기존 사용자 목록
    const existingUsers = ['existinguser', 'testuser'];

    // 아이디 중복 확인
    if (existingUsers.includes(userid)) {
      setErrorMessage('아이디가 중복되었습니다. 다른 아이디를 사용해주시기 바랍니다.');
      return;
    }

    // 성공적으로 가입 처리
    setErrorMessage('');
    // 회원가입 후 이동할 페이지 경로 설정
    navigate('/login');
  };

  return (
    <div>
      <div className="SignUp-box">
        <main>
          <img
            src="/img/my_way_logo.png"
            className="logo_image"
            alt="Logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }} // 마우스를 올렸을 때 커서가 포인터로 변하도록 스타일 추가
          />
          <hr />
          <div className="input-container">
            <input
              type="name"
              placeholder="이름"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="아이디"
              value={userid}
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup-register-buttons">
            <button className="signup-button" onClick={handleSignUpClick}>
              회원가입
            </button>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </main>
      </div>
    </div>
  );
}

export default SignUp;
