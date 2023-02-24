import React from "react";
import { Slide } from "react-awesome-reveal";
import "./Hero.scss";
const Hero = (props) => {
  return (
    <header style={{ backgroundImage: `url(${props.bgimg})` }}>
      <div className="Hero">
        <div className="Hero-main">
          <h1
            className="Main-heading"
            style={{ textAlign: props.textdirection }}
          >
            <Slide delay={1100} triggerOnce={true}>
              {props.herotext}
            </Slide>
          </h1>
          {props.children}
        </div>
      </div>
    </header>
  );
};

export default Hero;
