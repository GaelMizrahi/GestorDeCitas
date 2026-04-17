import { useState } from "react";
import BotonDeCita from "../BotonDeCita";
import "./Formulario.css";

function Formulario({ agregarCita }) {
  const [mascota, setMascota] = useState("");
  const [dueño, setDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const funcionBotonSubmit = (e) => {
    e.preventDefault();

    const nuevaCita = {
      id: Date.now(),//le asignamos un valor unico
      mascota,
      dueño,
      fecha,
      hora,
      sintomas,
    };

    agregarCita(nuevaCita);

    setMascota("");
    setDueño("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  return (
    <>
      <h2>Crear mi cita</h2>

      <form onSubmit={funcionBotonSubmit}>
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
          name="dueño"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={dueño}
          onChange={(e) => setDueño(e.target.value)}
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
        <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
        <BotonDeCita/>
      </form>
    </>
  );
}

export default Formulario;