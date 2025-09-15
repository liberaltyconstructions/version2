import React, { useState } from "react";
import "./Testimonial.css";
import Marquee from "react-fast-marquee";
import { testimonial } from "../../data";

const Testimonials = () => {
  return (
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
            <TestimonialCard key={index} list={list} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

const TestimonialCard = ({ list }) => {
  const [expanded, setExpanded] = useState(false);
  const maxWords = 25;

  const words = list.review.split(" ");
  const shortText = words.slice(0, maxWords).join(" ");
  const isLong = words.length > maxWords;

  return (
    <div className="testimonial__slide">
      <div className="user__row">
        <div className="details">
          <h3 className="name">{list.name}</h3>
        </div>
      </div>

      <div className="content-wrapper">
        <p className={`content ${expanded ? 'expanded' : 'collapsed'}`}>
          {expanded ? list.review : shortText}
          {isLong && !expanded && <span className="ellipsis">...</span>}
        </p>
        {isLong && (
          <button
            className="readmore-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Testimonials;