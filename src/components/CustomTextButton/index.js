import React from "react";
import PropTypes from "prop-types";

function CustomTextButton({ backgroundColor, textColor, buttonText }) {
  const buttonStyle = {
    backgroundColor: backgroundColor || "blue",
    color: textColor || "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle}>
      {buttonText}
    </button>
  );
}

CustomTextButton.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

export default CustomTextButton;
