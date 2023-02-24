import React from "react";
import "./PricingCard.scss";
const PricingCard = (props) => {
  return (
    <div className="PricingCard">
      <h4>{props.planname}</h4>
      <h3>
        ${props.price}
        <span>/mes</span>
      </h3>
      <div className="PricingCard-info">{props.children}</div>
      <button>UNETE AHORA</button>
    </div>
  );
};

export default PricingCard;
