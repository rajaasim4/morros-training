import React from "react";
import img from "../assets/Images/Hero.png";
import CommonSection from "../Components/CommonSection/CommonSection";
import ExerciseSection from "../Components/ExerciseSection/ExerciseSection";
import Hero from "../Components/HeroComponent/Hero";
import Banner from "../Layout/Banner/Banner";
import Pricing from "../Layout/Pricing/Pricing";
const Home = () => {
  return (
    <>
      <Hero
        bgimg={img}
        textdirection={"left"}
        herotext={` VEN A FORTALECER TU CUERPO Y ESTADO FISICO  CON PROFESIONALES`}
      >
        <button>UNETE AHORA</button>
      </Hero>
      <CommonSection />
      <Banner />
      <Pricing />
      <ExerciseSection />
    </>
  );
};

export default Home;
