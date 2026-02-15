import styles from "./cardComponent.module.css";

const cardComp = ({
  title,
  badge = "/imgproyect.jpg",
  technologics = [],
  description = "Description no disponible",
  url = "#home",
  urlPage = "",
  classId = "",
  textBtn = "Ver Más",
  textBtn2 = "",
}) => {
  return (
    <article
      className={`${styles.containerCard} ${classId ? styles[classId] : ""} zoomEffect`}>
      <section className={styles.containerTitle}>
        <h2 className="subtitleStyles">{title}</h2>
        <figure className={`${styles.fig} figureStyle`}>
          <img className="imgStyle" src={badge} alt={title} title={title} />
        </figure>
        {technologics.length > 0 && (
          <div className={styles.containerTechnologics}>
            {technologics.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </section>

      <h4 className="textStyles">{description}</h4>
      <section className={styles.containerBtn}>
        <a
          className="zoomEffect"
          area-label="Ir al sitio del curso"
          href={url ? url : ""}
          target={url ? "_blank" : "_self"}
          rel="noopener noreferrer">
          {textBtn}
        </a>

        {textBtn2 && (
          <a
            className="zoomEffect"
            area-label="Ir al sitio del curso"
            href={urlPage ? urlPage : ""}
            target={urlPage ? "_blank" : "_self"}
            rel="noopener noreferrer">
            {textBtn2}
          </a>
        )}
      </section>
    </article>
  );
};

export default cardComp;
