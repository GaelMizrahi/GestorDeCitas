import { useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [citas, setCitas] = useState([]);

  function agregarCita(nueva) {
    setCitas((prev) => [...prev, nueva]);
  }

  function eliminarCita(id) {
    setCitas((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <Layout
      citas={citas}
      onAgregarCita={agregarCita}
      onEliminarCita={eliminarCita}
    />
  );
}

export default App;