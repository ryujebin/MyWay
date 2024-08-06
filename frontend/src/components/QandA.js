import React, { useState } from 'react';
function QandA() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기서 제출 로직을 추가합니다.
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <div>
      <main>
        <section className="asking-box-style">
          <form onSubmit={handleSubmit} className="form-style">
            <label>
              제목을 입력하세오:
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="input-style"
              />
            </label>
            <label>
              내용을 입력하세요:
              <textarea
                value={content}
                onChange={handleContentChange}
                className="textarea-style"
              />
            </label>
            <button type="submit" className="asking-button-style">
              제출
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

function QandA1() {
  return (
    <div>
      <main>
        <section className="asking-box-style">
          <div>
            <p className="ask">Q. 산책로 등록을 하면 뭐가 좋나요 ?</p>
            <hr></hr>
          </div>
          <div>
            <p className="answer">
              A. 안녕하십니까. my way를 이용해주심에 대단히 감사드립니다. MyWay
              어플에 산책로를 등록하였을 때의 이점에 대한 답변 드리겠습니다.
              우선 본인만의 특별한 산책로를 지역 주민들과 공유할 수 있으며,
              클리어 횟수에 따라 다양한 보상을 받을 수 있습니다. 예를 들어
              등록된 산책로를 다른 이용자가 사용하거나 일정 횟수 이상 산책로를
              클리어하면 제휴업체 쿠폰 등 다양한 혜택이 제공됩니다. 또한 본인이
              등록한 산책로를 여러 사람이 이용하고 즐기는 모습을 보면서 성취감을
              느낄 수 있으며, 등록한 산책로의 인기도와 사용 빈도를 통해 자신의
              기여도를 확인할 수 있습니다. 더불어, Myway 어플의 Q&amp;A
              게시판이나 다른 커뮤니티 기능을 통해 다양한 사람들과 소통하고
              새로운 정보를 얻을 수 있습니다. 산책로에 대한 피드백을 받고, 이를
              바탕으로 더 나은 산책로를 개발할 수도 있습니다. 산책로 등록을 통해
              지역 주민과 함께 나누고, 다양한 보상과 혜택을 누리며 건강한 산책을
              즐기시길 바랍니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function QandA2() {
  return (
    <div>
      <main>
        <section className="asking-box-style">
          <div>
            <p className="ask">Q. 제휴업체 사용은 어떻게 하나요 ?</p>
            <hr></hr>
          </div>
          <div>
            <p className="answer">
              A. Myway 어플에서 제공하는 제휴업체 쿠폰은 산책로를 등록하거나
              클리어하여 얻은 쿠폰은 어플 내의 &apos;쿠폰함&apos;에서 확인할 수
              있습니다. 쿠폰을 사용할 때는 해당 제휴업체에 방문하여 Myway 어플을
              열고 &apos;쿠폰함&apos;에서 사용하고자 하는 쿠폰을 선택한 후,
              제휴업체 직원에게 보여준 후 사용하시면 됩니다. 제휴업체의 상세
              정보와 쿠폰 사용 조건은 어플 내에서 확인할 수 있습니다. 쿠폰의
              유효 기간과 사용 조건을 꼼꼼히 확인하여, 유효 기간 내에 조건에
              맞게 사용하시길 바랍니다. 감사합니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function QandA3() {
  return (
    <div>
      <main>
        <section className="asking-box-style">
          <div>
            <p className="ask">Q. 산책로 등록 시 사진을 꼭 첨부해야 하나요 ?</p>
            <hr></hr>
          </div>
          <div>
            <p className="answer">
              A. Myway 어플에서 산책로를 등록할 때 사진 첨부는 필수 사항이
              아닙니다. 산책로에 대한 사진을 첨부하면 다른 이용자들에게 산책로를
              시각적으로 전달할 수 있어 흥미를 유발할 수 있습니다. Myway는
              이용자들이 보다 쉽게 산책로를 찾고, 즐길 수 있도록 다양한 기능을
              제공하고 있으니 많은 참여 부탁드립니다. 감사합니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function QandA4() {
  return (
    <div>
      <main>
        <section className="asking-box-style">
          <div>
            <p className="ask">Q. GPS 기능이 잘 안돼요 !</p>
            <hr></hr>
          </div>
          <div>
            <p className="answer">
              A. 다음과 같은 방법으로 해결해보시기 바랍니다. 1. 스마트폰의 GPS
              설정이 켜져 있는지 확인하고, 위치 서비스가 활성화되어 있는지
              확인하세요. Myway 어플의 위치권한이 허용되어 있는지 확인하시길
              바랍니다. 2. 실내에서는 GPS 신호가 약해질 수 있으므로 가능하면
              야외나 신호가 강한 곳에서 GPS 기능을 사용해 보시길 바랍니다. 3.
              Myway 어플을 완전히 종료한 후 다시 실행하거나, 스마트폰을
              재부팅해보시기 바랍니다. 4. Myway 어플과 스마트폰 운영체제가 최신
              버전으로 업데이트되어 있는지 확인하세요. 업데이트를 통해 버그가
              수정되고 성능이 개선될 수 있습니다. 그래도 문제가 지속되면, Myway
              고객 지원팀에 문의해 주시면 추가적인 도움을 드리겠습니다.
              감사합니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

// 기본으로 내보내는 컴포넌트
export default QandA;

// 이름으로 내보내는 컴포넌트
export { QandA1, QandA2, QandA3, QandA4 };