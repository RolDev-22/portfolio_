import styles from "./header.module.css";
import { useState, useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      ref={navRef}
      className={`${isOpen ? styles.Active : ""} ${styles.header}`}>
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span style={{ "--width": "3rem" }}></span>
        <span style={{ "--width": "2.5rem" }}></span>
        <span style={{ "--width": "3rem" }}></span>
      </button>
      <nav>
        <ul>
          <li className="zoomEffect">
            <a href="#home" onClick={toggleMenu}>
              Inicio
            </a>
          </li>
          <li className="zoomEffect">
            <a href="#about" onClick={toggleMenu}>
              Sobre
            </a>
          </li>
          <li className="zoomEffect">
            <a href="#services" onClick={toggleMenu}>
              Servicios
            </a>
          </li>
          <li className="zoomEffect">
            <a href="#projects" onClick={toggleMenu}>
              Proyectos
            </a>
          </li>
          <li className="zoomEffect">
            <a href="#contact" onClick={toggleMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
