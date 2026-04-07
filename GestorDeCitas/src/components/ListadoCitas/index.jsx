import Boton from "../Boton";
import "./Cita.css"

function ListadoCitas({ cita }) {
  return (
    <div class="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.dueño}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sintomas: <span>{cita.sintomas}</span></p>

      <Boton/>
    </div>
  );
}

export default Cita;