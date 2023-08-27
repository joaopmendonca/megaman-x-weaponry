import React from "react";
import PropTypes from "prop-types"; // Importe o PropTypes para definir o tipo da prop

import logo from "../../assets/images/megamanx-logo.png";

function Logo(props) {
  const { size } = props;

  // Use a prop size se estiver definida, caso contrário, use "150px"
  const logoStyle = {
    width: size || "150px",
    height: "auto",
  };

  return (
    <div className="logo">
      <img src={logo} alt="Logo Megaman X" style={logoStyle} />
    </div>
  );
}

// Defina o tipo da prop "size" como string
Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
