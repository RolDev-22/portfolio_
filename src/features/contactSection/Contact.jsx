import style from "./contact.module.css";
import SocialComp from "@common/socialComponent/SocialComponent";
import FormComp from "@ui/formComponent/FormComponent";

export default function Contact() {
  return (
    <section id="contact" className={`${style.sectionStyle} sectionStyle`}>
      <section className={`${style.containerLinks} ${style.stlShared}`}>
        <SocialComp styleClass="textActive" />
      </section>
      <section className={`${style.contactInfo}  ${style.stlShared}`}>
        <section className={style.contactInfoSection}>
          <h2 className="titleStyles">!Hablemos!</h2>
          <h3 className="subtitleStyles">
            Actualmente estoy disponible para nuevos proyectos o roles de tiempo
            completo. Si tienes alguna pregunta o simplemente quieres saludar,
            mi bandeja de entrada siempre está abierta.
          </h3>
        </section>
        <FormComp />
      </section>
    </section>
  );
}
