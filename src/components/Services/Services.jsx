import React from "react";
import { services } from "../../data";
import Service from "../Service/Service"

const Services = () => {
    return(
        <section id="services">
                <div >
                    <h1 className="title">Our <span className="g-text">Services</span> </h1>
                    <h3 className="sub__title">We specialize in strategic construction innovation.</h3>
                </div>
                <div>
                    <Service/>
                </div>
        </section>
    )
}

export default Services;