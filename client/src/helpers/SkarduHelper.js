import React from 'react';
import {SkarduData} from "./SkarduData";
import { Link } from 'react-router-dom';
import "../styles/ImageSlider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const currentImage = images[currentImageIndex];

  return (
    <div className="image-slider">
      <img src={currentImage.image1} alt={currentImage.description} />
      <p className="image-description">{currentImage.description}</p>
      <button onClick={() => setCurrentImageIndex(currentImageIndex - 1)} disabled={currentImageIndex === 0}>Previous</button>
      <button onClick={() => setCurrentImageIndex(currentImageIndex + 1)} disabled={currentImageIndex === images.length - 1}>Next</button>
    </div>
  );
};

const SkarduHelper = () => {
  const [skarduData] = SkarduData;

  return (
    <div className="skardu">
      <Link to="/destinations" className="link-button">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </Link>
      <ImageSlider images={skarduData.images} />
    </div>
  );
};

export default SkarduHelper;
