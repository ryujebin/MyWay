import React from 'react';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div>
      <main>
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
    </div>
  );
}

export default Service;
