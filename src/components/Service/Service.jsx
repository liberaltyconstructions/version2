// PricingCards.jsx
import React from 'react';
import { planData }  from "../../data"
import './Service.css';

const PricingCard = ({ title, features }) => (
  <div className={`card ${title.toLowerCase()}`}>
    <h2>{title}</h2>
    <ul className="features">
      {features.map((feature, index) => (
        <li key={index}>
          <i className="fas fa-check blue-check"></i>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Serve = () => {
  return (
    <div className="container1">
      <div className="wrapper">
      <div className="card-area">
        <PricingCard {...planData.private} />
        <PricingCard {...planData.government} />
      </div>
    </div>
    </div>
  );
};

export default Serve;