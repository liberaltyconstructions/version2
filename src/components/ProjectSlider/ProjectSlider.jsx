import { useState } from 'react';
import { CardStack } from "../ui/card-stack.tsx";
import './ProjectSlider.css'

const ProjectSlider = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div id='project' className="project-slider-container">
      <h1>Our <span className="g-text">Building Projects</span></h1>
      <div className="description-container">
        <p>Explore our building projects which are perfectly tailored for the client requirements, vastu, aesthetics and durability</p>
      </div>
      <CardStackDemo onImageClick={openPopup} />
      
      {/* Image Popup */}
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
              alt="Project Preview" 
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

const CARDS = [
  {
    id: 0,
    image: "Private/ElevationDesigns/ED_1_imresizer.png",
  },
  {
    id: 1,
    image: "Private/ElevationDesigns/ED_2_imresizer.png",
  },
  {
    id: 2,
    image: "Private/ElevationDesigns/ED_3_imresizer.png",
  },
  {
    id: 3,
    image: "Private/ElevationDesigns/ED_4_imresizer.png",
  },
  {
    id: 4,
    image: "Private/ElevationDesigns/ED_5_imresizer.png",
  },
  {
    id: 5,
    image: "Private/ElevationDesigns/ED_6_imresizer.png",
  },
  {
    id: 6,
    image: "Private/ElevationDesigns/ED_7_imresizer.png",
  },
  // Removed the extra comma that was causing undefined element
  {
    id: 7,
    image: "Private/ElevationDesigns/ED_8_imresizer.png",
  },
  {
    id: 8,
    image: "Private/InteriorDesigns/ID_1_imresizer.png",
  },
  {
    id: 9,
    image: "Private/InteriorDesigns/ID_9_imresizer.png",
  },
  {
    id: 10,
    image: "Private/ElevationDesigns/Picture3_imresizer.png",
  },
  {
    id: 11,
    image: "Private/ElevationDesigns/Picture4_imresizer.png",
  },
  {
    id: 12,
    image: "Private/ElevationDesigns/Picture5_imresizer.png",
  },
];

export default ProjectSlider;