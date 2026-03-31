import "./styles/Boton.css";

function Boton({ texto, tipo = "button", variante = "primario" }) {
  const clase =
    variante === "eliminar"
      ? "button eliminar u-full-width"
      : "u-full-width button-primary";

  return (
    <button type={tipo} className={clase}>
      {texto}
    </button>
  );
}

export default Boton;
