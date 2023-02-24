import React from "react";
import { Slide } from "react-awesome-reveal";
import "./ExerciseCard.scss";
const ExerciseCard = (props) => {
  return (
    <>
      <div
        className="ExerciseCard"
        style={{ backgroundImage: `url(${props.bgimg})` }}
      >
        <div className="Exercise-Card-info">
          <h3>{props.name}</h3>
          <span>Entrenador</span>
        </div>
      </div>
    </>
  );
};

export default ExerciseCard;
