import CampoFormulario from "./CampoFormulario";
import Boton from "./Boton";
import "./styles/FormularioCita.css";

function FormularioCita() {
  return (
    <>
      <h2>Crear mi Cita</h2>

      <form>
        <CampoFormulario
          label="Nombre Mascota"
          type="text"
          name="mascota"
          placeholder="Nombre Mascota"
        />

        <CampoFormulario
          label="Nombre Dueño"
          type="text"
          name="propietario"
          placeholder="Nombre dueño de la mascota"
        />

        <CampoFormulario
          label="Fecha"
          type="date"
          name="fecha"
        />

        <CampoFormulario
          label="Hora"
          type="time"
          name="hora"
        />

        <CampoFormulario
          label="Síntomas"
          name="sintomas"
          textarea={true}
        />

        <Boton texto="Agregar Cita" tipo="submit" variante="primario" />
      </form>
    </>
  );
}

export default FormularioCita;