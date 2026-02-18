import style from "./hero.module.css";
import IcCv from "@assets/ic-cv.svg";
import Prfl from "/prfl-hero.webp";
import SocialComp from "@common/socialComponent/SocialComponent";

export default function Hero() {
  return (
    <section id="home" className={`${style.heroStyle} sectionStyle`}>
      <section className={`${style.topSection}`}>
        <div className="information">
          <h1 className={`${style.subtitleStyles} subtitleStyles`}>
            Rolando Murillo
          </h1>
          <h2 className={`${style.titleStyles} titleStyles`}>Web Developer</h2>
          <p className={`${style.textStyles} textStyles`}>
            Construyendo soluciones, con código limpio
          </p>
        </div>
        <a
          href="@assets/CV.pdf"
          download={"CV-Rolando Murillo"}
          area-label="Descargar Curriculum"
          className="btnStyle zoomEffect">
          <figure className="zoomEffect">
            <img src={IcCv} alt="Logo descargar" />
          </figure>
          <span>Currículum</span>
        </a>
      </section>
      <section className={`${style.bottonSection}`}>
        <figure className={`${style.figurePers} figureStyle`}>
          <img src={Prfl} alt="Image Perfil" className="imgStyle" />
        </figure>
        <SocialComp styleClass="" />
      </section>
    </section>
  );
}
