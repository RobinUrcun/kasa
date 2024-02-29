import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="errorComponent">
      <p className="errorComponent_number">404</p>
      <p className="errorComponent_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/home" className="errorComponent_link">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error;
