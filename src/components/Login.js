import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="login-container">
        <main>
          <img src="/img/my_way_logo.png" className="logo_image" alt="Logo" />
          <hr></hr>
          <div className="input-container">
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <div className="login-register-buttons">
            <button className="new-button">로그인</button>
            <button className="new-button" onClick={handleSignUpClick}>
              회원가입
            </button>
          </div>
          <div className="footer-buttons">
            <button className="footer-button">아이디 찾기</button>
            <button className="footer-button">비밀번호 찾기</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
