import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/all";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";
import "./Footer.scss";
const Footer = () => {
  const totop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="footer-top">
            <div className="footer-logo-section">
              <img src={Logo} alt="" />
              <p>
                Ofrecemos la posibilidad de realizar actividades deportivas:
                Crossfit, Boxeo, Gym y Otros, en pro de mejorar tú de salud y
                resistencia fisica, a través de un sistema de entrenamiento 100%
                profesional.
              </p>
            </div>
            <div className="footer-info-section">
              <h3>Info</h3>
              <ul>
                <li>
                  <Link to="/" onClick={totop}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Customers" onClick={totop}>
                    Entrenador
                  </Link>
                </li>
                <li>
                  <Link to="/Products" onClick={totop}>
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to="/Classes" onClick={totop}>
                    Clases
                  </Link>
                </li>
                <li>
                  <Link to="/ContactUs" onClick={totop}>
                    Contactos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-newsletter-section">
              <h3>SUSCRIBETE</h3>
              <input type="text" placeholder="Email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Copyright @ 2022 All Rights Reserved.</span>
            <span>+555 55 5555</span>
            <span>morrostraining@info.com</span>
            <span>Santiago, Chile</span>
            <div className="footer-social">
              <span>
                <BsFacebook />
              </span>
              <span>
                <BsInstagram />
              </span>
              <span>
                <BsYoutube />
              </span>
              <span>
                <BsTwitter />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
