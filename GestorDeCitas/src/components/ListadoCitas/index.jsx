import Cita from "../Cita";
import SinCitas from "../SinCitas";
import "./ListadoCitas.css";

function ListadoCitas({ citas, setCitas }) {
  if (citas.length === 0) {
    return <SinCitas />;
  }

  return (
    <>
      <h2>Administra tus citas</h2>

      {citas.map((cita) => (
        <Cita
          key={cita.id}
          cita={cita}
          citas={citas}
          setCitas={setCitas}
        />
      ))}
    </>
  );
}

export default ListadoCitas;