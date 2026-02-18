import style from "./formComponent.module.css";

const FormComp = () => {
  return (
    <form className={style.formComponent} onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          className={style.shared}
          id="name"
          type="text"
          placeholder="Ingrese su nombre"
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input
          className={style.shared}
          id="email"
          type="email"
          placeholder="Ejmp@dominio.com"
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          className={style.shared}
          id="message"
          placeholder="Escriba su mensaje"
          autoComplete="off"></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormComp;
