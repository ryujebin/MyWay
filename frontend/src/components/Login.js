import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = async () => {
    // 예시로 가정된 데이터베이스 체크
    // 실제로는 백엔드 API를 호출하여 자격 증명을 확인해야 합니다.
    const storedUser = {
      username: 'testuser',
      password: 'password123'
    };

    // 백엔드 API 호출 예시
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username, password }),
    // });
    // const result = await response.json();

    if (username === storedUser.username && password === storedUser.password) {
      // 성공적으로 로그인
      setErrorMessage('');
      navigate('/community'); // 로그인 후 /community 경로로 이동
    } else {
      // 로그인 실패
      setErrorMessage('로그인에 실패했습니다. 정보를 정확하게 입력해주세요.');
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="login-container">
        <main>
          <img
            src="/img/my_way_logo.png"
            className="logo_image"
            alt="Logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }} // 마우스를 올렸을 때 커서가 포인터로 변하도록 스타일 추가
          />
          <hr/>
          <div className="input-container">
            <input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-register-buttons">
            <button className="new-button" onClick={handleLoginClick}>
              로그인
            </button>
            <button className="new-button" onClick={handleSignUpClick}>
              회원가입
            </button>
          </div>
          <div className="footer-buttons">
            <button className="footer-button">아이디 찾기</button>
            <button className="footer-button">비밀번호 찾기</button>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </main>
      </div>
    </div>
  );
}

export default Login;
