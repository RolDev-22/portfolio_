import styles from "./socialComponent.module.css";
import Git from "@assets/ic-git.svg";
import Mail from "@assets/ic-mail.svg";
import Linked from "@assets/ic-link.svg";

const SocialComp = ({ styleClass }) => {
  return (
    <article
      className={`${styles.socialComponent} ${styleClass ? styles[styleClass] : ""}`}>
      <a href="#">
        <figure className={`${styles.figStyle}`}>
          <img src={Git} alt="logo git" className="imgStyle zoomEffect" />
        </figure>
        {styleClass ? (
          <span className={`${styles.spanStyle}`}>GitHub</span>
        ) : null}
      </a>

      <a href="#">
        <figure className={`${styles.figStyle}`}>
          <img
            src={Linked}
            alt="logo linkedin"
            className="imgStyle zoomEffect"
          />
        </figure>
        {styleClass ? (
          <span className={`${styles.spanStyle}`}>LinkedIn</span>
        ) : null}
      </a>

      <a href="#">
        <figure className={`${styles.figStyle}`}>
          <img src={Mail} alt="logo email" className="imgStyle zoomEffect" />
        </figure>
        {styleClass ? (
          <span className={`${styles.spanStyle}`}>
            rolandomurilloaguirre22@gmail.com
          </span>
        ) : null}
      </a>
    </article>
  );
};

export default SocialComp;
