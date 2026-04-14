import Boton from "../Boton";
import "./Cita.css";

function Cita({ cita, citas, setCitas }) {
  function eliminarCita() {
    const confirmar = window.confirm("¿Eliminar esta cita?");

    if (confirmar) {
      const nuevasCitas = citas.filter((unaCita) => unaCita.id !== cita.id);
      setCitas(nuevasCitas);
    }
  }

  return (
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.dueño}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sintomas: <span>{cita.sintomas}</span></p>

      <div onClick={eliminarCita}>
        <Boton />
      </div>
    </div>
  );
}

export default Cita;