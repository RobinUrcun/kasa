import { useState } from "react";

import arrow_before from "../../../../assets/form/arrow_before.png";
import arrow_after from "../../../../assets/form/arrow_after.png";

function Caroussel({ advertissement }) {
  const [pictureNumber, setPictureNumber] = useState(1);

  function previousPicture() {
    if (pictureNumber === 1) {
    } else {
      setPictureNumber(pictureNumber - 1);
    }
  }
  function nextPicture() {
    if (pictureNumber === advertissement.pictures.length) {
    } else {
      setPictureNumber(pictureNumber + 1);
    }
  }

  return (
    <div className="logement_img">
      <div className="logement_img_caroussel">
        <div
          onClick={previousPicture}
          className=" caroussel_arrow arrow_before"
        >
          <img src={arrow_before} alt="précedent" />
        </div>
        <img src={advertissement.pictures[pictureNumber - 1]} alt="logement" />
        <div onClick={nextPicture} className="caroussel_arrow arrow_after">
          <img src={arrow_after} alt="suivant" />
        </div>
      </div>
    </div>
  );
}

export default Caroussel;
