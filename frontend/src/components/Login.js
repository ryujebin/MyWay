import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = async () => {

    // 모든 필드가 입력되었는지 확인
    if (!userid || !password) {
      setErrorMessage('정보를 정확하게 입력해주시길 바랍니다.');
      return;
    }

    // 백엔드 API 호출 예시
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ userid, password }),
    // });
    // const result = await response.json();

    let response;
    
    // 로그인 요청
    try {
      response = await axios.post('http://localhost:5000/api/users/login', {
        userid,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data); // 응답 데이터 확인

      // 성공적인 응답 처리
      setSuccessMessage('로그인에 성공했습니다!');
      setErrorMessage(''); // 기존 에러 메시지 초기화
      // 필요 시 입력 필드 초기화
      setUserId('');
      setPassword('');
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
      // 에러 처리
      if (error.response) {
        // 서버에서 응답이 온 경우
        setErrorMessage(error.response.data.message || '로그인에 실패했습니다.');
      } else {
        // 다른 에러 발생
        setErrorMessage('로그인에 실패했습니다. 다시 시도해주세요.');
      }
    }
    if (response.status === 200) {
      navigate('/');
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
              value={userid}
              onChange={(e) => setuserid(e.target.value)}
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
