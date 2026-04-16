import "./Boton.css"

function Boton({ onClick }) {
  return (
      <button onClick={onClick} className="button elimnar u-full-width">Eliminar ×</button>
  );
}

export default Boton;