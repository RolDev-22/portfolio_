import styles from "./carruselComponent.module.css";
import CardComp from "@ui/cardComponent/CardComponent";
import { useState } from "react";

const CarruselCom = ({ data }) => {
  const services = data || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(services.length - 1);
    }
  };

  return (
    <section className={styles.customize} area-label="Carrusel de servicios">
      <button
        className={`${styles.btn} ${styles.btnLeft}`}
        onClick={handlePrevious}
        area-label="Anterior"></button>

      <section className={styles.containerCarrusel}>
        <div
          className={styles.slideContainer}
          style={{ transform: `translateX(-${currentIndex * 26}%)` }}>
          {services.length > 0 ? (
            services.map((item, index) => (
              <CardComp
                key={index}
                title={item.name}
                badge={item.badge}
                description={item.description}
                classId="specialId"
                textBtn="Contactame"
                url="#contact"
              />
            ))
          ) : (
            <p className={styles.noData}>No hay servicios disponibles</p>
          )}
        </div>
      </section>
      <button
        className={`${styles.btn} ${styles.btnRight}`}
        onClick={handleNext}
        area-label="Siguiente"></button>
    </section>
  );
};

export default CarruselCom;
