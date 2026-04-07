import Formulario from "../Formulario";
import ListadoCitas from "../ListadoCitas";
import "./Layout.css"

function Layout({ citas }) {
  return (
    <div class ="container">
      <div class ="row">
        
        <div class ="one-half column">
          <Formulario />
        </div>

        <div class="one-half column">
          <ListadoCitas citas={citas} />
        </div>

      </div>
    </div>
  );
}

export default Layout;