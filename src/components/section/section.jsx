import { useState } from "react";
import arrow from "../../assets/form/arrow.png";

function Section({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function rolltext() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={isOpen === false ? "section_box" : "section_box open"}>
      <div className="section_box_h2">
        <h2 onClick={rolltext}>{title}</h2>
        <img
          className={isOpen === true ? "reverse_arrow" : null}
          src={arrow}
          alt="fleche"
        />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Section;
