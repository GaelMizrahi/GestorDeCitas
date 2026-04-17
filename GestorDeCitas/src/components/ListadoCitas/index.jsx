import Cita from "../Cita";

function ListadoCitas({ citas, eliminarCita }) {
  return (
    <>
      <h2>Administra tus citas</h2>

      <div className="lista-citas">
        {citas.length === 0 ? (
          <p>No hay citas</p>
        ) : (
          citas.map((cita) => (
            <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ListadoCitas;