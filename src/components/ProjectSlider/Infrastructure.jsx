import { useState } from 'react';
import { CardStack } from "../ui/card-stack.tsx";
import './ProjectSlider.css'

const Infrastructure = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div id='infrastructure' className="project-slider-container">
      <h1>Our <span className="g-text">Infrastructure Projects</span></h1>
      <div className="description-container">
        <p>
          Lift irrigation project which serves 1200 hectare of command area at Siddapura 
          village in Karnataka, which includes two pump houses to accommodate vertical turbine 
          pumps and submersible pumps, which runs on 33kV and 11kV substations 
          to flow water through 70 km pipeline (both MS and HDPE). It also includes surge tanks and 
          pipe appurtenance structures.
        </p>
      </div>
      <CardStackDemo onImageClick={openPopup} />
      
      {/* Image Popup - same as ProjectSlider */}
      {popupImage && (
        <div 
          className={`image-popup-overlay ${popupImage ? 'open' : ''}`}
          onClick={closePopup}
        >
          <div 
            className="image-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={popupImage} 
              alt="Infrastructure Preview" 
              className="image-popup-image"
            />
            <button 
              className="image-popup-close"
              onClick={closePopup}
              aria-label="Close popup"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export function CardStackDemo({ onImageClick }) {
  return (
    <div className="card-stack-container">
      <CardStack items={CARDS} onImageClick={onImageClick} />
    </div>
  );
}

// Repeat the 2 images multiple times for smoother animation
const CARDS = [
  {
    "id": 0,
    "image": "Private/InfrastructureProjects/IF2_imresizer.png"
  },
  {
    "id": 1,
    "image": "Private/InfrastructureProjects/IF1.jpg"
  },
  {
    "id": 2,
    "image": "Private/InfrastructureProjects/IF2_imresizer.png"
  },
  {
    "id": 3,
    "image": "Private/InfrastructureProjects/IF1.jpg"
  },
  {
    "id": 4,
    "image": "Private/InfrastructureProjects/IF2_imresizer.png"
  },
  {
    "id": 5,
    "image": "Private/InfrastructureProjects/IF1.jpg"
  },
  {
    "id": 6,
    "image": "Private/InfrastructureProjects/IF2_imresizer.png"
  },
  {
    "id": 7,
    "image": "Private/InfrastructureProjects/IF1.jpg"
  },
  {
    "id": 8,
    "image": "Private/InfrastructureProjects/IF2_imresizer.png"
  },
  {
    "id": 9,
    "image": "Private/InfrastructureProjects/IF1.jpg"
  },
  {
    "id": 10,
    "image": "Private/InfrastructureProjects/IF2_imresizer.png"
  },
  {
    "id": 11,
    "image": "Private/InfrastructureProjects/IF1.jpg"
  },
  {
    "id": 12,
    "image": "Private/InfrastructureProjects/IF1.jpg"
  }
]

export default Infrastructure;