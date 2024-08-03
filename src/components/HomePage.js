import React, { useState } from "react";
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
  );
};

export default HomePage;
