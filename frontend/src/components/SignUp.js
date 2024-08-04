import React from "react";

function SignUp() {
  return (
    <div>
      <div className="SignUp-box">
        <main>
          <img src="/img/my_way_logo.png" className="logo_image" alt="Logo" />
          <hr></hr>
          <div className="input-container">
            <input type="name" placeholder="이름" />
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <div className="login-register-buttons">
            <button className="new-button">회원가입</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignUp;
