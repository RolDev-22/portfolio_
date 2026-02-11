const BtnMenu = ({ icon, text }) => {
  return (
    <button className="btnStyle zoomEffect" aria-label="Menu Button">
      {icon ? <figure>{icon}</figure> : ""}
      <span>{text}</span>
    </button>
  );
};

export default BtnMenu;
