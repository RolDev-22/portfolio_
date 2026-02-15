import styles from "./service.module.css";
import CarruComp from "@ui/carruselComponent/carruselComponent.jsx";
import dataServices from "@data/dataService.json";

export default function Service() {
  const services = dataServices.services || [];
  return (
    <section id="services" className={`${styles.constumize} sectionStyle`}>
      <section className={styles.containerTitle}>
        <h2 className="titleStyles">Services</h2>
        <h3 className="textStyles">
          ´´¿Listo para llevar tu proyecto al siguiente nivel?`` <br />
          ¡Hablemos! Soluciones escalables y diseño centrado en el usuario.
        </h3>
      </section>
      <section className={styles.containerCarrusel}>
        <CarruComp data={services} />
      </section>
    </section>
  );
}
