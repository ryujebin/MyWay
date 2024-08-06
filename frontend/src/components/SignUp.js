import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSignUpClick = async () => {
    // 모든 필드가 입력되었는지 확인
    if (!username || !userid || !password) {
      setErrorMessage('정보를 정확하게 입력해주시길 바랍니다.');
      return;
    }

    try {
      const response = await axios.post('mywayapp.uk:5000/api/users/signup', {
        username,
        userid,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data); // 응답 데이터 확인

      // 성공적인 응답 처리
      setErrorMessage(''); // 기존 에러 메시지 초기화
      // 필요 시 입력 필드 초기화
      setUserName('');
      setUserId('');
      setPassword('');

      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during sign up:', error.response ? error.response.data : error.message);
      // 에러 처리
      if (error.response) {
        // 서버에서 응답이 온 경우
        setErrorMessage(error.response.data.message || '회원 가입에 실패했습니다.');
      } else {
        // 다른 에러 발생
        setErrorMessage('회원 가입에 실패했습니다. 다시 시도해주세요.');
      }
    }
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
              type="text"
              placeholder="이름"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value)
              }}
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
};

export default SignUp;
