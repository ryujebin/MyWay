// src/components/HomePage.js
import React, { useState } from "react";
import Header from "./Header"; // Header import
import Footer from "./Footer"; // Footer import
import image1 from "../components/images/homepage.PNG";
import image2 from "../components/images/secondImage.PNG";
import "./HomePage.scss";

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
    <div className="homepage">
      <Header /> {/* Use Header component */}
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
      <Footer /> {/* Use Footer component */}
    </div>
  );
};

export default HomePage;
