import Cita from "../Cita";
import SinCitas from "../SinCitas";

function ListadoCitas({ citas, eliminarCita }) {
  return (
    <>
      <h2>Administra tus citas</h2>

      <div className="lista-citas">
        {citas.length == 0 ? (
          <SinCitas/>
        ) : (
          citas.map((cita) => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita}/>
          ))
        )}
      </div>
    </>
  );
}

export default ListadoCitas;