import React from "react";
import "./Logo.css"
import { PiBuildingsFill } from "react-icons/pi";
import logo from "./LOGO.jpg"

const Logo = () => {
    return(
        <div className="logo">
            <div className="icon__container">
                <img className="photo" src={logo} alt="" />
            </div>
            <h1 className="name">
                Liberalty <span>Constructions</span>
            </h1>
        </div>
    )
}

export default Logo;