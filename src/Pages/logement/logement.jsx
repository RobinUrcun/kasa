import { useParams } from "react-router-dom";
import Advertissements from "../../assets/advertissements.json";
import Caroussel from "./caroussel/caroussel";
import LogementInfo from "./logementInfo/logementInfo";
import Error from "../error/error";

function Logement() {
  const id = useParams();
  console.log(id);

  const advertissement = Advertissements.find(
    (advertissement) => advertissement.id === id.id
  );
  console.log(advertissement);

  return !advertissement ? (
    <Error />
  ) : (
    <main className="logement">
      <Caroussel advertissement={advertissement} />
      <LogementInfo advertissement={advertissement} />
    </main>
  );
}
export default Logement;
