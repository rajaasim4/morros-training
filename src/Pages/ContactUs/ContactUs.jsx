import React from "react";
import Contact_img from "../../assets/Images/ContactUs.png";
import CommonSection from "../../Components/CommonSection/CommonSection";
import Hero from "../../Components/HeroComponent/Hero";
import "./ContactUs.scss";
const ContactUs = () => {
  return (
    <main className="ContactUs">
      <Hero
        herotext={"CONTACTANOS"}
        textdirection={"center"}
        bgimg={Contact_img}
      />
      <CommonSection />
      <div className="Contact-Form">
        <h2 className="section-heading">CONTACTANOS</h2>
        <div className="Contact-Form-main">
          <form action="">
            <div className="form-input">
              <label htmlFor="">Nombre</label>
              <input type="text" name="" id="" />
            </div>
            <div className="form-input">
              <label htmlFor="">Appelido</label>
              <input type="text" name="" id="" />
            </div>
            <div className="form-input">
              <label htmlFor="">Telefono</label>
              <input type="text" name="" id="" />
            </div>
            <div className="form-input">
              <label htmlFor="">Email</label>
              <input type="text" name="" id="" />
            </div>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
