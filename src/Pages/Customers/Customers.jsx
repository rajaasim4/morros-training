import React from "react";
import hero_img from "../../assets/Images/Customers.png";
import CommonSection from "../../Components/CommonSection/CommonSection";
import ExerciseSection, {
  ExerciseCardsSection,
} from "../../Components/ExerciseSection/ExerciseSection";
import Hero from "../../Components/HeroComponent/Hero";

import "./Customers.scss";
const Customers = () => {
  return (
    <main className="Customers">
      <Hero
        bgimg={hero_img}
        textdirection={"center"}
        herotext={"NUESTRO EQUIPO"}
      ></Hero>
      <CommonSection />
      <ExerciseSection>
        <ExerciseCardsSection />
      </ExerciseSection>
      <ExerciseSection>
        <ExerciseCardsSection />
      </ExerciseSection>
    </main>
  );
};

export default Customers;
