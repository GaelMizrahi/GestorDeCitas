import Formulario from "../Formulario";
import ListadoCitas from "../ListadoCitas";
import "./Layout.css";

function Layout({ citas, setCitas }) {
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario citas={citas} setCitas={setCitas} />
        </div>

        <div className="one-half column">
          <ListadoCitas citas={citas} setCitas={setCitas} />
        </div>
      </div>
    </div>
  );
}

export default Layout;