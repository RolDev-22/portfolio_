import styles from "./about.module.css";
import ImgAvt from "/prfl-about.png";
import IconComp from "@/components/ui/iconComponent/IconComponent.jsx";
import CardComp from "@ui/cardComponent/cardComponent.jsx";
import dataIcons from "@data/dataTecnologie.json";
import dataCourse from "@data/dataCourse.json";

export default function About() {
  const { icons } = dataIcons;
  const { courses } = dataCourse;

  return (
    <section id="about" className={`${styles.custumize} sectionStyle`}>
      <section className={`${styles.top}`}>
        <article>
          <h2 className="titleStyles">Sobre Mi</h2>
          <h3 className="subtitleStyles">
            Apasionado por la innovatión y resolución de problemas
          </h3>
        </article>
        <figure className="figureStyle">
          <img src={ImgAvt} alt="image avatar" />
        </figure>
        <p className="textStyles">
          Hola! Soy Rolando, desarrollador web en constante formación, buscando
          oportunidades y creando soluciones digitalez modernas y adaptables,
          durante mi formación profesional en la{" "}
          <strong>Universidad de Costa Rica </strong>
          adquirí conocimientos en todo lo que respecta al ciclo de vida del
          desarrollo de software, además de habilidades en bases de datos,
          gestion de redes y proyectos, echa un vistaso a mis proyectos (
          <a href="#">Ver Proyectos</a>)
        </p>
      </section>
      <section className={`${styles.botton}`}>
        <h3 className="subtitleStyles">Tecnologías y Herramientas</h3>
        <section className={`${styles.containerIcons} underlinedEffect`}>
          {icons.map((item, index) => (
            <IconComp key={index} name={item.name} url={item.url} />
          ))}
        </section>

        <h3 className="subtitleStyles">Cursos Obtenidos</h3>
        <section className={`${styles.containerCourse}`}>
          {courses.map((item, index) => (
            <CardComp
              key={index}
              title={item.name}
              badge={item.badge}
              description={item.description}
              url={item.url}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
