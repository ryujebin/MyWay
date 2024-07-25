import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function QandA() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기서 제출 로직을 추가합니다.
    console.log('Title:', title);
    console.log('Content:', content);
  };

  return (
    <div>
      <header>
        <div className="home_logo">
          <img src="/images/my_way_logo.png" className="logo_image" alt="Logo"/>
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
        <hr style={{ width: '90%'}}/>
        <section class="asking-box-style">
          <form onSubmit={handleSubmit} className="form-style">
            <label>
              제목을 입력하세오:
              <input type="text" value={title} onChange={handleTitleChange} className="input-style" />
            </label>
            <label>
              내용을 입력하세요:
              <textarea value={content} onChange={handleContentChange} className="textarea-style" />
            </label>
            <button type="submit" className="asking-button-style">제출</button>
          </form>
        </section>
      </main>
      <footer>
        <button className="creator-button">제작자</button>
      </footer>
    </div>
  );
}

function QandA1() {
  return (
    <div>
      <header>
        <div className="home_logo">
          <img src="/images/my_way_logo.png" className="logo_image" alt="Logo"/>
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
        <hr style={{ width: '90%'}}/>
        <section class="asking-box-style">
            <div>
                <p class="ask">Q. 산책로 등록을 하면 뭐가 좋나요 ?</p>
                <hr></hr>
            </div>
            <div>
                <p class="answer">A. 안녕하십니까. my way를 이용해주심에 대단히 감사드립니다.</p>
            </div>
        </section>
      </main>
      <footer>
        <button className="creator-button">제작자</button>
      </footer>
    </div>
  );
}

function QandA2() {
  return (
    <div>
      <header>
        <div className="home_logo">
          <img src="/images/my_way_logo.png" className="logo_image" alt="Logo"/>
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
        <hr style={{ width: '90%'}}/>
        <section class="asking-box-style">
            <div>
                <p class="ask">Q. 제휴업체 사용은 어떻게 하나요 ?</p>
                <hr></hr>
            </div>
            <div>
                <p class="answer">A. 안녕하십니까. my way를 이용해주심에 대단히 감사드립니다.</p>
            </div>
        </section>
      </main>
      <footer>
        <button className="creator-button">제작자</button>
      </footer>
    </div>
  );
}

function QandA3() {
  return (
    <div>
      <header>
        <div className="home_logo">
          <img src="/images/my_way_logo.png" className="logo_image" alt="Logo"/>
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
        <hr style={{ width: '90%'}}/>
        <section class="asking-box-style">
            <div>
                <p class="ask">Q. 산책로 등록 시 사진을 꼭 첨부해야 하나요 ?</p>
                <hr></hr>
            </div>
            <div>
                <p class="answer">A. 안녕하십니까. my way를 이용해주심에 대단히 감사드립니다.</p>
            </div>
        </section>
      </main>
      <footer>
        <button className="creator-button">제작자</button>
      </footer>
    </div>
  );
}

function QandA4() {
  return (
    <div>
      <header>
        <div className="home_logo">
          <img src="/images/my_way_logo.png" className="logo_image" alt="Logo"/>
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
        <hr style={{ width: '90%'}}/>
        <section class="asking-box-style">
            <div>
                <p class="ask">Q. GPS 기능이 잘 안돼요 !</p>
                <hr></hr>
            </div>
            <div>
                <p class="answer">A. 안녕하십니까. my way를 이용해주심에 대단히 감사드립니다.</p>
            </div>
        </section>
      </main>
      <footer>
        <button className="creator-button">제작자</button>
      </footer>
    </div>
  );
}

// 기본으로 내보내는 컴포넌트
export default QandA;

// 이름으로 내보내는 컴포넌트
export { QandA1 };
export { QandA2 };
export { QandA3 };
export { QandA4 };