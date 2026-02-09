const BtnMenu = ({ icon, text }) => {
  return (
    <button className="btnStyle" aria-label="Menu Button">
      {icon}
      {text}
    </button>
  );
};

export default BtnMenu;
