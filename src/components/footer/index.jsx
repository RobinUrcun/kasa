import nameIcone from "../../assets/tittle/nameIcone.png";
import letterK from "../../assets/tittle/letterK.png";
import letterS from "../../assets/tittle/letterS.png";
import letterA from "../../assets/tittle/letterA.png";

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={letterK} alt="La lettre K  de Kasa" />
        <img src={nameIcone} alt="Kasa" />
        <img src={letterS} alt="La lettre S  de Kasa" />
        <img src={letterA} alt="La lettre A  de Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
