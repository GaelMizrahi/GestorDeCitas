import Cita from "./Cita";
import SinCitas from "./SinCitas";
import "./styles/ListadoCitas.css";

function ListadoCitas({ citas }) {
  return (
    <>
      <h2>Administra tus citas</h2>

      <div className="lista-citas">
        {citas.length === 0 ? (
          <SinCitas />
        ) : (
          citas.map((cita) => <Cita key={cita.id} cita={cita} />)
        )}
      </div>
    </>
  );
}

export default ListadoCitas;
