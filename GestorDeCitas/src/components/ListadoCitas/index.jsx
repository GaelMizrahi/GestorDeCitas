import Cita from "../Cita";

function ListadoCitas({ citas, onEliminarCita }) {
  return (
    <>
      {citas.map((cita) => (
        <Cita
          key={cita.id}
          cita={cita}
          onEliminarCita={onEliminarCita}
        />
      ))}
    </>
  );
}

export default ListadoCitas;