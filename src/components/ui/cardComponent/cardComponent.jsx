import styles from "./cardComponent.module.css";

const cardComp = ({
  title,
  badge,
  description,
  url = "#Contact",
  classId = "",
  textBtn = "Ver Más",
}) => {
  return (
    <article
      className={`${styles.containerCard} ${classId ? styles[classId] : ""} zoomEffect`}>
      <h2 className="subtitleStyles">{title}</h2>
      <figure className={`${styles.fig} figureStyle`}>
        <img className="imgStyle" src={badge} alt={title} title={title} />
      </figure>
      <h4 className="textStyles">{description}</h4>
      <a
        className="zoomEffect"
        area-label="Ir al sitio del curso"
        href={url ? url : ""}
        rel="noopener noreferrer">
        {textBtn}
      </a>
    </article>
  );
};

export default cardComp;
