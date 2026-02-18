import style from "./fotter.module.css";
import ImgAvt from "/prfl-about.png";
import SocialComp from "@common/socialComponent/SocialComponent";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <section className={style.top}>
        <figure className={style.fig}>
          <img className="imgStyle" src={ImgAvt} alt="image avatar" />
        </figure>
        <h3 className="subtitleStyles">
          “No es cuanto duras en desarrollarlo, sino, construir algo bien hecho”
        </h3>
        <div>
          <h4>Sigueme</h4>
          <SocialComp />
        </div>
      </section>
      <span>© RolDev-22 Todos los derechos reservados</span>
    </footer>
  );
};

export default Footer;
