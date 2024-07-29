import React from 'react';
import { Link } from 'react-router-dom';
import Header from './asset/section/header';
import Footer from './asset/section/footer';

function Service() {
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
        <hr style={{ width: '90%' }}/>
        <h1>자주 묻는 질문</h1>
        <div className='QandA_box'>
          
          <hr />
          <Link to="/QandA1" className="QandA_list">산책로 등록을 하면 뭐가 좋나요 ?</Link>
          <hr />
          <Link to="/QandA2" className="QandA_list">제휴업체 사용은 어떻게 하나요 ?</Link>
          <hr />
          <Link to="/QandA3" className="QandA_list">산책로 등록 시 사진을 꼭 첨부해야 하나요 ?</Link>
          <hr />
          <Link to="/QandA4" className="QandA_list">GPS 기능이 잘 안돼요 !</Link>
          <hr />
        </div>
        
        
      <div className="register_button_container">
        <span style={{margin:"15px"}}>도움이 필요하신가요 ?</span>
        <Link to="/QandA" className="button-box">문의하기</Link>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default Service;
