import React from "react";

import logoDeskopt from "../assets/logo/karamolle1.png";
import logoResponsive from "../assets/logo/hotel_name.jpg";
import { Link } from "react-router-dom";
import { useRef } from "react";


const Header = () => {
  const buttonToggle = useRef(),
    menuContainer = useRef(),
    menuToggle = useRef();
  const XD = () => {
    buttonToggle.current.classList.toggle("active");
    menuContainer.current.classList.toggle("menu-container__active");
    menuToggle.current.classList.toggle("menu-toggle__active");
  };
  const onMenuToggle=()=> {
    XD();
  };
  const MenuUl=()=> {
    if (buttonToggle.current.classList[1]) {
      XD();
    }
  };
  return (
    <header className="header">
      <div className="header__contacto section-xl flx-ja-cc">
        <div className="logo">
          <a href="#" className="logo__img">
            <img className="logo__desktop" src={logoDeskopt} alt="Logo hotel" />
            <img
              className="logo__responsive"
              src={logoResponsive}
              alt="Logo hotel"
            />
          </a>
        </div>
        <div className="wsp flx-a-c">
          <p className="wsp__message">Mejor tarifa garantizada</p>
          <h2 className="wsp__reservar">Reservas al whatsapp</h2>
          <a className="wsp__link" href="#">
            Reservar
          </a>
        </div>
      </div>

      <div className="header-menu section-xl">
        <div ref={buttonToggle} onClick={onMenuToggle} className="button-toggle">
          <div className="linea-toggle"></div>
        </div>
        <div className="header-nav" ref={menuContainer}>
          <nav className="main-nav" ref={menuToggle}>
            <ul className="main-nav__list flx-a-c" onClick={MenuUl} >
              <li className="main-nav__item">
                <a className="main-nav__link" href="/#">
                  Inicio
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="/#servicios">
                  Servicios
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="/#quienessomos">
                  ¿Quienes somos?
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="/#galeria">
                  Galeria
                </a>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="/habitaciones">
                  Habitaciones
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
