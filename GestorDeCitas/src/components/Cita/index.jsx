import "./Cita.css";

function Cita({ cita, eliminarCita }) {
  const confirmarEliminar = () => {
    const confirmar = window.confirm("¿Eliminar esta cita?");
    if (confirmar) {
      eliminarCita(cita.id);
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

      <button type="button" className="button elimnar u-full-width" onClick={confirmarEliminar}>Eliminar ×</button>
    </div>
  );
}

export default Cita;