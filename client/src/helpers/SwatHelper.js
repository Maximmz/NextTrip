import React from 'react';
import {SwatData} from "./SwatData";
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

const SwatHelper = () => {
  const [swatData] = SwatData;

  return (
    <div className="skardu">
      <h1>{swatData.id}</h1>
      <ImageSlider images={swatData.images} />
    </div>
  );
};

export default SwatHelper;
