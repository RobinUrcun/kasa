import starActive from "../../../../assets/form/star-active.png";
import starInactive from "../../../../assets/form/star-inactive.png";

function Rating({ rating }) {
  const ratingArray = Array.from({ length: rating });
  const ratingRestArray = Array.from({ length: 5 - rating });

  return (
    <div className="logement_article_userInfo_rating">
      {ratingArray.map((star, index) => (
        <img key={index} src={starActive} alt="etoile colorée" />
      ))}
      {ratingRestArray.map((star, index) => (
        <img key={index} src={starInactive} alt="etoile non colorée" />
      ))}
    </div>
  );
}

export default Rating;
