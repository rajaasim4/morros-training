import React from "react";
import Products_img from "../../assets/Images/Products.png";
import CommonSection from "../../Components/CommonSection/CommonSection";
import Hero from "../../Components/HeroComponent/Hero";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import ProductsData from "../../Data/ProductsData";
import "./Products.scss";
const Products = () => {
  return (
    <main className="Products">
      <Hero
        herotext={"CONOCER NUESTROS RODUCTOS"}
        textdirection={"center"}
        bgimg={Products_img}
      />
      <CommonSection />
      <div className="Products-Card-section">
        <h2 className="section-heading"> PRODUCTOS</h2>
        <div className="Products-main">
          {ProductsData.map((val) => {
            return <ProductsCard key={val.id} {...val} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;
