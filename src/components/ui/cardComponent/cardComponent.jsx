import styles from "./cardComponent.module.css";

const cardComp = ({ title, badge, description, url }) => {
  return (
    <article className={styles.containerCard}>
      <h2 className="subtitleStyles">{title}</h2>
      <figure className={`${styles.fig} figureStyle`}>
        <img src={badge} alt={title} title={title} />
      </figure>
      <h4 className="textStyles">{description}</h4>
      <a href={url} target="_blanck">
        Ver
      </a>
    </article>
  );
};

export default cardComp;
