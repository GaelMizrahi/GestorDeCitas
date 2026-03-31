import "./styles/Layout.css";

function Layout({ izquierda, derecha }) {
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">{izquierda}</div>
        <div className="one-half column">{derecha}</div>
      </div>
    </div>
  );
}

export default Layout;