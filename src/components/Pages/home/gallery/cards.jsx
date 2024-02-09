import { Link } from "react-router-dom";

function Card({ title, cover }) {
  return (
    <li className="sectionGallery_card">
      <Link>
        <div className="sectionGallery_card_img">
          <img src={cover} alt={title} />
        </div>
        <p>{title}</p>
      </Link>
    </li>
  );
}

export default Card;
