import styles from "./Project.module.css";
import CardComp from "@/components/ui/cardComponent/cardComponent";
import dataProjects from "@data/dataProject.json";

export default function Project() {
  const { projects } = dataProjects;
  return (
    <section id="proyects" className={`${styles.customize} sectionStyle`}>
      <section className={styles.containerTitle}>
        <h2 className="titleStyles">Proyectos</h2>
        <h3 className="subtitleStyles">
          Transformando ideas en realidades digitales
        </h3>
      </section>
      <section className={styles.containerProject}>
        <section className={styles.container}>
          {projects.length > 0 ? (
            projects.map((item, index) => (
              <CardComp
                key={index}
                title={item.title}
                technologics={item.tecnologics}
                description={item.description}
                textBtn="Código"
                textBtn2="Visitar"
                url={item.urlGit}
                urlPage={item.urlPage}
                classId="proyect"
              />
            ))
          ) : (
            <p>No hay proyectos disponibles.</p>
          )}
        </section>
      </section>
    </section>
  );
}
