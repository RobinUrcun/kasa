import { useParams } from "react-router-dom";
import Advertissements from "../../../assets/advertissements.json";
import Caroussel from "./caroussel/caroussel";
import LogementInfo from "./logementInfo/logementInfo";

function Logement() {
  const id = useParams();

  const advertissement = Advertissements.find(
    (advertissement) => advertissement.id === id.id
  );

  return (
    <main className="logement">
      <Caroussel advertissement={advertissement} />
      <LogementInfo advertissement={advertissement} />
    </main>
  );
}
export default Logement;
