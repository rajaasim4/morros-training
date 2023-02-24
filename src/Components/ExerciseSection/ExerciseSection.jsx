import React from "react";
import { Roll } from "react-awesome-reveal";
import Cardimg1 from "../../assets/Images/ExercieCard_img1.png";
import Cardimg2 from "../../assets/Images/ExercieCard_img2.png";
import Cardimg3 from "../../assets/Images/ExercieCard_img3.png";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import "./ExerciseSection.scss";
const ExerciseSection = () => {
  return (
    <section className="ExerciseSection">
      <h2 className="section-heading">CONOCE NUESTRO EQUIPO</h2>
      <ExerciseCardsSection />
    </section>
  );
};

const ExerciseCardsSection = () => {
  return (
    <div className="Exercise-main">
      <Roll damping={0.5} triggerOnce={true}>
        <ExerciseCard bgimg={Cardimg1} name={"Alan Ramirez"} />
        <ExerciseCard bgimg={Cardimg2} name={"Natalio Bruno"} />
        <ExerciseCard bgimg={Cardimg3} name={"Alex Perez"} />
      </Roll>
    </div>
  );
};

export default ExerciseSection;
export { ExerciseCardsSection };
