import styles from "./cardComponent.module.css";

const cardComp = ({ title, badge, description, url }) => {
  return (
    <article className={`${styles.containerCard} zoomEffect`}>
      <h2 className="subtitleStyles">{title}</h2>
      <figure className={`${styles.fig} figureStyle`}>
        <img className="imgStyle" src={badge} alt={title} title={title} />
      </figure>
      <h4 className="textStyles">{description}</h4>
      <a
        className="zoomEffect"
        area-label="Ir al sitio del curso"
        href={url}
        target="_blanck">
        Ver más
      </a>
    </article>
  );
};

export default cardComp;
