import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import "./ProductsCard.scss";
const ProductsCard = (props) => {
  const { name, price, img } = props;
  return (
    <JackInTheBox duration={1000} triggerOnce={true}>
      <div className="ProductsCard">
        <div className="ProductsCard-img">
          <img src={img} alt="" />
        </div>
        <div className="ProductsCard-description">
          <span>{name}</span>
          <h4>${price}</h4>
          <button>COMPRAR</button>
        </div>
      </div>
    </JackInTheBox>
  );
};

export default ProductsCard;
