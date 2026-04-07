import BotonDeCita from "../BotonDeCita";
import "./Formulario.css"

function Formulario() {
  return (
    <>
      <h2>Crear mi Cita</h2>

      <form>
        <CampoInput label="Nombre Mascota" type="text" placeholder="Nombre Mascota" />
        <CampoInput label="Nombre Dueño" type="text" placeholder="Nombre dueño de la mascota" />
        <CampoInput label="Fecha" type="date" />
        <CampoInput label="Hora" type="time" />

      <label>Sintomas</label><textarea name="sintomas" class="u-full-width"></textarea>

        <BotonDeCita/>
      </form>
    </>
  );
}

export default Formulario;