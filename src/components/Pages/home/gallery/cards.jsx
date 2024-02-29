import { Link } from "react-router-dom";

function Card({ title, cover, idtf, location }) {
  return (
    <li className="sectionGallery_card">
      <Link to={`/kasa/logement/${idtf}`}>
        <div className="sectionGallery_card_img">
          <img src={cover} alt={`Découvrez cette appartement à ${location}`} />
        </div>
        <p>{title}</p>
      </Link>
    </li>
  );
}

export default Card;
