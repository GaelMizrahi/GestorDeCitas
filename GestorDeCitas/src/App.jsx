import { useState } from "react";
import Titulo from "./components/Titulo";
import Layout from "./components/Layout";
import FormularioCita from "./components/FormularioCita";
import ListadoCitas from "./components/ListadoCitas";

function App() {
  const [citas] = useState([
    {
      id: 1,
      mascota: "Nina",
      propietario: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna",
    },
    {
      id: 2,
      mascota: "Sifon",
      propietario: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho",
    },
    {
      id: 3,
      mascota: "Floki",
      propietario: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo",
    },
  ]);

  return (
    <>
      <Titulo texto="Administrador de Pacientes" />

      <Layout
        izquierda={<FormularioCita />}
        derecha={<ListadoCitas citas={citas} />}
      />
    </>
  );
}

export default App