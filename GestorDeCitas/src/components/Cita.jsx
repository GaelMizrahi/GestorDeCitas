import Boton from "./Boton";
import "./styles/Cita.css";

function Cita({ cita }) {
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Síntomas: <span>{sintomas}</span>
      </p>

      <Boton texto="Eliminar ×" variante="eliminar" />
    </div>
  );
}

export default Cita;
