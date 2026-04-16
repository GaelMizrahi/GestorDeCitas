import { useState } from "react";
import BotonDeCita from "../BotonDeCita";
import "./Formulario.css";

function Formulario({ onAgregarCita }) {
  const [mascota, setMascota] = useState("");
  const [dueno, setDueno] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nueva = {
      id: Date.now(),
      mascota,
      dueño: dueno,
      fecha,
      hora,
      sintomas,
    };

    onAgregarCita(nueva);

    setMascota("");
    setDueno("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  return (
    <>
      <h2>Crear mi Cita</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="dueno"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={dueno}
          onChange={(e) => setDueno(e.target.value)}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        ></textarea>

        <BotonDeCita />
      </form>
    </>
  );
}

export default Formulario;