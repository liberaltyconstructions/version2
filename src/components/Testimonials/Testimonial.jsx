import React from "react";
import "./Testimonial.css"
import Marquee from "react-fast-marquee";
import { testimonial } from "../../data";

const Testimonials = () => {
    return(
        <section id="testimonial">
            <div className="pcont">
                <h1 className="title">
                    Clients <span className="g-text">Testimonials</span>
                </h1>
                <h3 className="sub__title">What our clients are saying</h3>
                <Marquee 
                    gradient={false} 
                    speed={50} 
                    pauseOnHover={true}
                    className="testimonial__container"
                >
                    {testimonial.map((list, index) => (
                        <div className="testimonial__slide" key={index}>
                            <div className="user__row">
                                {/* <div className="profile">
                                    <img src={list.image} alt={list.title} />
                                    <i class="bi bi-person-heart testimonial-icon"></i>
                                </div> */}
                                <div className="details">
                                    <h3 className="name">{list.name}</h3>
                                    {/* <small className="text__muted">CEO of benvix</small> */}
                                </div>
                            </div>
                            <p className="text__muted content">{list.review}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default Testimonials;