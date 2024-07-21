import React, { useState } from "react";
import ReactDOM from "react-dom";

const PopupPortal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.body
  );
};

const WorkItems = ({item}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = (e) => {
        e.preventDefault();
        setIsPopupOpen(true);
    }

    const closePopup = () => {
        setIsPopupOpen(false);
    }

    return(
        <div className="work__card" key={item.id} id="project">
            <img src={item.image} alt="" className="work__img" />        
        <div className="content1" >
        <h3 className="work__title">{item.title}</h3>
        <a href="#" onClick={openPopup} className="work__button">
            View Project
        </a>
        </div>

            {isPopupOpen && (
                <PopupPortal>
                    <div className="popup-overlay" onClick={closePopup}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                            <img src={item.image} alt="" className="popup-img" />
                            <button className="close-button" onClick={closePopup}>X</button>
                        </div>
                    </div>
                </PopupPortal>
            )}
        </div>
    )
}

export default WorkItems;