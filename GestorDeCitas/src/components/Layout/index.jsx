import Formulario from "../Formulario";
import ListadoCitas from "../ListadoCitas";
import "./Layout.css";

function Layout({ citas, agregarCita, eliminarCita }) {
  return (
    <div className="container">
      <div className="row">
        
        <div className="one-half column">
          <Formulario agregarCita={agregarCita} />
        </div>

        <div className="one-half column">
          <ListadoCitas
            citas={citas}
            eliminarCita={eliminarCita}
          />
        </div>

      </div>
    </div>
  );
}

export default Layout;