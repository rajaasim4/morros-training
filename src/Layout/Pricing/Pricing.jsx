import React from "react";
import { Zoom } from "react-awesome-reveal";
import PricingCard from "../../Components/PricingCard/PricingCard";
import "./Pricing.scss";
const Pricing = () => {
  return (
    <section className="Pricing">
      <h3 className="section-heading">NUESTROS PRECIOS</h3>
      <div className="Pricing-main">
        <Zoom triggerOnce={true} cascade damping={0.5}>
          <PricingCard planname={"Plan Basico"} price={20}>
            <span>Acceso ilimitado 24h</span>
            <span>Entrenador personal</span>
            <span>Casillero + Baño</span>
          </PricingCard>
          <PricingCard planname={"pan medico"} price={29}>
            <span>Acceso ilimitado 24h</span>
            <span>Entrenador personal</span>
            <span>Casillero + Baño</span>
            <span>Masaje 1 vez al mes</span>
          </PricingCard>
          <PricingCard planname={"plan pro"} price={35}>
            <span>Acceso ilimitado 24h</span>
            <span>Entrenador personal</span>
            <span>Casillero + Baño</span>
            <span>Masaje 1 vez al mes</span>
            <span>1 Sesion de Spa</span>
          </PricingCard>
        </Zoom>
      </div>
    </section>
  );
};

export default Pricing;
