import Tag from "./tag";
import Rating from "./rating";
import Dropdown from "../../../dropdown/dropdown";

function LogementInfo({ advertissement }) {
  const tags = advertissement.tags;
  return (
    <article className="logement_article">
      <div className="logement_article_wrapper">
        <div className="logement_article_info">
          <h1>{advertissement.title}</h1>
          <p
            className="logement_article_info_location
        "
          >
            {advertissement.location}
          </p>
          <div className="logement_article_tags">
            {tags.map((tag, index) => (
              <Tag key={`${advertissement.id} ${index}`} tag={tag} />
            ))}
          </div>
        </div>
        <div className="logement_article_userInfo">
          <div className="logement_article_userInfo_host">
            <h3>{advertissement.host.name}</h3>
            <img src={advertissement.host.picture} alt="votre hôte !" />
          </div>
          <Rating rating={advertissement.rating} />
        </div>
      </div>
      <div className="logement_article_other">
        <div className="logement_article_other_wrapper">
          <Dropdown title="Description" text={advertissement.description} />
        </div>
        <div className="logement_article_other_wrapper">
          <Dropdown title="Équipements" text={advertissement.equipments} />
        </div>
      </div>
    </article>
  );
}

export default LogementInfo;