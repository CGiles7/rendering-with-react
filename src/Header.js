import React from "react";
import "./Header.css";

function Header({ name, imageSrc, birthday }) {
  return (
    <div>
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <p>Birthday: {birthday}</p>
    </div>
  );
}

export default Header;
