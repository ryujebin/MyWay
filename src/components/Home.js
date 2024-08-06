import React from 'react';
import Header from './asset/section/header';
import Footer from './asset/section/footer';

function Home() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default Home;

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.side_nav .list');

  listItems.forEach(item => {
      item.addEventListener('click', function(event) {
          // 모든 항목에서 clicked 클래스 제거
          listItems.forEach(i => i.classList.remove('clicked'));
          
          // 클릭한 항목에 clicked 클래스 추가
          this.classList.add('clicked');
      });
  });
});


