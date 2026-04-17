import { useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2026-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna",
    },
    {
      id: 2,
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2026-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho",
    },
    {
      id: 3,
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2026-08-05",
      hora: "16:15",
      sintomas: "No está comiendo",
    }
  ]);

  function agregarCita(nueva) {
    setCitas((prev) => [...prev, nueva]);
  }
/*Ayuda de chat, prev es el array, cuando lo pone suelto entre parentesis lo hace para traerlo, cuando lo usa con ... es para traer 
las citas ya existentes y ", nueva" para agregar la cita que recibe por parametro.
En eliminar cita llama de vuelta al prev, osea al array de citas, y con el filter lo recorre, cuando el filter llega a la cita con el id
recibido en el parametro no elimina la cita, simplemente reemplaza el array del estado con uno nuevo sin esta cita*/
  function eliminarCita(id) {
    setCitas((prev) => prev.filter((cita) => cita.id !== id));
  }

  return (
    <Layout citas={citas} agregarCita={agregarCita} eliminarCita={eliminarCita}/>
  );
}

export default App;