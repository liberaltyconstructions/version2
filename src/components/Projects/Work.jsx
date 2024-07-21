import React from "react";
import "./work.css"
import Works from "./Works";

const Work = () => {
    return(
        <section className="work section" id="project">
            <div className="services__top">
                    <h1 className="title">Our <span className="g-text">Projects</span></h1>
                    <h3 className="sub__title">Check out our most recent Projects.</h3>
                </div>
            <Works/>
        </section>
    )
}
export default Work;