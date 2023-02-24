import React, { useEffect, useState } from "react";
import { BiMenuAltRight, IoMdClose } from "react-icons/all";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";
import "./NavBar.scss";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [sticky, setSticky] = useState("");
  const NavShow = () => {
    setShow(!show);

    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

 
  return (
    <>
      <nav >
        <div className="Main-nav">
          <div className="Nav-logo">
            <img src={Logo} alt="" />
          </div>
          <div className={show ? "Nav-links Nav-links-show" : "Nav-links"}>
            <ul>
              <li>
                <Link to="/" onClick={NavShow}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Customers" onClick={NavShow}>
                  Entrenador
                </Link>
              </li>
              <li>
                <Link to="/Products" onClick={NavShow}>
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/Classes" onClick={NavShow}>
                  Clases
                </Link>
              </li>
              <li>
                <Link to="/ContactUs" onClick={NavShow}>
                  Contactos
                </Link>
              </li>
              <li>
                <Link to="">
                  <button>Unete Ahora</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="Hamburger">
            {show ? (
              <IoMdClose onClick={()=>setShow(!show)} />
            ) : (
              <BiMenuAltRight onClick={()=>setShow(!show)} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
