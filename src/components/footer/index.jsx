import nameIcone from "../../assets/tittle/nameIcone.webp";
import letterK from "../../assets/tittle/letterK.webp";
import letterS from "../../assets/tittle/letterS.webp";
import letterA from "../../assets/tittle/letterA.webp";

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
