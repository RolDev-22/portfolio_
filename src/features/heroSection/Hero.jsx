import style from "./hero.module.css";
import BtnComponent from "@components/common/BtnComponent";
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
          <h1 className={`${style.titleStyles}`}>Rolando Murillo</h1>
          <h2 className={`${style.subtitleStyles}`}>Web Dveloper</h2>
          <p className={`${style.textStyles}`}>
            Construyendo soluciones, con código limpio
          </p>
        </div>
        <a
          href="@assets/CV.pdf"
          download={"CV-Rolando Murillo"}
          className="btnStyle">
          <figure>
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
          <a href="#">
            <img
              src={Git}
              alt="icono-github"
              loading="lazy"
              className="imgStyle"
            />
          </a>
          <a href="#">
            <img
              src={Linkd}
              alt="icono-linkedin"
              loading="lazy"
              className="imgStyle"
            />
          </a>
          <a href="#">
            <img
              src={Ml}
              alt="icono-corre"
              loading="lazy"
              className="imgStyle"
            />
          </a>
        </article>
      </section>
    </section>
  );
}
