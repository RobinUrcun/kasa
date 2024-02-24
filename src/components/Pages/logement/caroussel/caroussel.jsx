import { useState } from "react";

import arrow_before from "../../../../assets/form/arrow_before.png";
import arrow_after from "../../../../assets/form/arrow_after.png";

function Caroussel({ advertissement }) {
  const [pictureNumber, setPictureNumber] = useState(0);

  function previousPicture() {
    if (pictureNumber === 0) {
      setPictureNumber(advertissement.pictures.length - 1);
    } else {
      setPictureNumber(pictureNumber - 1);
    }
  }
  function nextPicture() {
    if (pictureNumber === advertissement.pictures.length - 1) {
      setPictureNumber(0);
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
        <img src={advertissement.pictures[pictureNumber]} alt="logement" />
        <div onClick={nextPicture} className="caroussel_arrow arrow_after">
          <img src={arrow_after} alt="suivant" />
        </div>
        <div className="logement_img_number">
          <p>
            {pictureNumber + 1} / {advertissement.pictures.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Caroussel;
