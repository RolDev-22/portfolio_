import styles from "./iconComponent.module.css";

const IconComp = ({ name, url }) => {
  return (
    <figure className={`${styles.iconCont} zoomEffect iconContainer`}>
      <img
        className={`${styles.imgStyle} imgStyle zoomEffect`}
        src={url}
        alt={`${name} logo`}
        title={`${name} logo`}
      />
    </figure>
  );
};

export default IconComp;
