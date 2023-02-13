import React from 'react';
import {SkarduData} from "./SkarduData";
import "../styles/ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const currentImage = images[currentImageIndex];

  return (
    <div className="image-slider">
      <img src={currentImage.image1} alt={currentImage.description} />
      <p>{currentImage.description}</p>
      <button onClick={() => setCurrentImageIndex(currentImageIndex - 1)} disabled={currentImageIndex === 0}>Previous</button>
      <button onClick={() => setCurrentImageIndex(currentImageIndex + 1)} disabled={currentImageIndex === images.length - 1}>Next</button>
    </div>
  );
};

const SkarduHelper = () => {
  const [skarduData] = SkarduData;

  return (
    <div className="skardu">
      <h1>{skarduData.id}</h1>
      <ImageSlider images={skarduData.images} />
    </div>
  );
};

export default SkarduHelper;
