import React from 'react';
import './App.css';

function Login() {
  return (
    <div className="login-container">
      <header className="header-logo">
        <img src="/images/my_way_logo.png" style={{width:"200px"}} alt="Logo" />
      </header>
      <main>
        <div className="input-container">
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
        </div>
        <div className="login-register-buttons">
          <button className="new-button">로그인</button>
          <button className="new-button">회원가입</button>
        </div>
        <div className="footer-buttons">
          <button className="footer-button">아이디 찾기</button>
          <button className="footer-button">비밀번호 찾기</button>
        </div>
      </main>
    </div>
  );
}

export default Login;
