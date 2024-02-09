import { Link } from "react-router-dom";
import nameIcone from "../../assets/tittle/nameIcone.png";
import letterK from "../../assets/tittle/letterK.png";
import letterS from "../../assets/tittle/letterS.png";
import letterA from "../../assets/tittle/letterA.png";

function Header() {
  return (
    <header>
      <div className="header_logo">
        <img src={letterK} alt="La lettre K  de Kasa" />
        <img src={nameIcone} alt="Kasa" />
        <img src={letterS} alt="La lettre S  de Kasa" />
        <img src={letterA} alt="La lettre A  de Kasa" />
      </div>
      <nav>
        <Link to={""}>Accueil</Link>
        <Link to={"about"}>A Propos</Link>
      </nav>
    </header>
  );
}
export default Header;
