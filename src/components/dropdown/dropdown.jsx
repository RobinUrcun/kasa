import { useState } from "react";
import arrow from "../../assets/form/arrow.png";

function Dropdown({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function rolltext() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={isOpen === false ? "dropdown_box" : "dropdown_box open"}>
      <div className="dropdown_box_h2">
        <h2 onClick={rolltext}>{title}</h2>
        <img
          onClick={rolltext}
          className={isOpen === true ? "reverse_arrow" : null}
          src={arrow}
          alt="fleche"
        />
      </div>
      {typeof text === "string" ? (
        <div className="dropdown_box_content">
          <p>{text}</p>
        </div>
      ) : (
        <ul className="dropdown_box_content">
          {text.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
