import styles from "./service.module.css";

export default function Service() {
  return (
    <section className={`${styles.constumize} sectionStyle`}>
      <section className={styles.containerTitle}>
        <h2 className="titleStyles">Services</h2>
        <h3 className="textStyles">
          ´´¿Listo para llevar tu proyecto al siguiente nivel?`` <br />
          ¡Hablemos! Soluciones escalables y diseño centrado en el usuario.
        </h3>
      </section>
    </section>
  );
}
