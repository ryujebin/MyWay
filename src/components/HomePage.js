import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트를 사용하려면 react-router-dom을 import해야 합니다.
import image1 from "./images/homepage.PNG";
import image2 from "./images/secondImage.PNG"; // Add more images as needed

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2];

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <header className="header">
      <div className="logo">
        <Link to="/">MyWay</Link>
      </div>
      <nav className="nav">
        <ul className="right-nav">
          <li>
            <Link to="/Login" className="login-link">
              <span>로그인</span>
            </Link>
            <Link to="/SignUp" className="signup-link">
              <span>회원가입</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
      <div className="homepage">
        <div className="content">
          <button className="prev-button" onClick={handlePrevClick}>
            &lt;
          </button>
          <img
            src={images[currentImageIndex]}
            alt="Content"
            className="content-image"
          />
          <button className="next-button" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
