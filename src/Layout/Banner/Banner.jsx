import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <section className="Banner">
      <div className="Banner-main">
        <div className="Banner-content">
          <h2>
            UNA GRAN OFERTA <br /> PARA ESTE VERANO
          </h2>
          <h2 id="Hero-center-heading">50% rebajado</h2>
          <button>UNETE AHORA</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
