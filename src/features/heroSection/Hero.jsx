import style from "./hero.module.css";
import IcCv from "@assets/ic-cv.svg";
import Prfl from "@assets/prfl-hero.webp";
import Git from "@assets/ic-git.svg";
import Linkd from "@assets/ic-link.svg";
import Ml from "@assets/ic-mail.svg";

export default function Hero() {
  return (
    <section className={`${style.heroStyle} sectionStyle`}>
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
          <img
            src={Prfl}
            alt="Image Perfil"
            loading="lazy"
            className="imgStyle"
          />
        </figure>
        <article className="containerSocials">
          <a className="iconContainer zoomEffect" href="#">
            <img
              title="Icono Github"
              src={Git}
              alt="Icono Github"
              loading="lazy"
              className="imgStyle zoomEffect"
            />
          </a>
          <a className="iconContainer zoomEffect" href="#">
            <img
              title="Icono Linkedin "
              src={Linkd}
              alt="Icono Linkedin"
              loading="lazy"
              className="imgStyle zoomEffect"
            />
          </a>
          <a className="iconContainer zoomEffect" href="#">
            <img
              title="Icono correo"
              src={Ml}
              alt="Icono corre"
              loading="lazy"
              className="imgStyle zoomEffect"
            />
          </a>
        </article>
      </section>
    </section>
  );
}
