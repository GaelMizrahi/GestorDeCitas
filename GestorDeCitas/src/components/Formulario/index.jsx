import { useState } from "react";
import BotonDeCita from "../BotonDeCita";
import "./Formulario.css";

function Formulario({ citas, setCitas }) {
  const [mascota, setMascota] = useState("");
  const [dueño, setDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  function agregarCita(e) {
    e.preventDefault();

    const nuevaCita = {
      id: Date.now(),
      mascota: mascota,
      dueño: dueño,
      fecha: fecha,
      hora: hora,
      sintomas: sintomas,
    };

    setCitas([...citas, nuevaCita]);

    setMascota("");
    setDueño("");
    setFecha("");
    setHora("");
    setSintomas("");
  }

  return (
    <>
      <h2>Crear mi Cita</h2>

      <form onSubmit={agregarCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          className="u-full-width"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          className="u-full-width"
          value={dueño}
          onChange={(e) => setDueño(e.target.value)}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        ></textarea>
  //onChange hace que ponga lo que escribe el usuario (e), ayuda de la ia
        <BotonDeCita/>
      </form>
    </>
  );
}

export default Formulario;