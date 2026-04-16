import "./Cita.css";

function Cita({ cita, onEliminarCita }) {
  const handleEliminar = () => {
    const confirmar = window.confirm("¿Eliminar esta cita?");

    if (confirmar) {
      onEliminarCita(cita.id);
    }
  };

  return (
    <div className="cita">
      <p>
        Mascota: <span>{cita.mascota}</span>
      </p>
      <p>
        Dueño: <span>{cita.dueño}</span>
      </p>
      <p>
        Fecha: <span>{cita.fecha}</span>
      </p>
      <p>
        Hora: <span>{cita.hora}</span>
      </p>
      <p>
        Sintomas: <span>{cita.sintomas}</span>
      </p>

      <button
        type="button"
        className="button eliminar u-full-width"
        onClick={handleEliminar}
      >
        Eliminar ×
      </button>
    </div>
  );
}

export default Cita;