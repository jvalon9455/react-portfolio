import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const styleOfButton = ["btn-primary", "btn-outline-primary"];
const sizeOfButton = ["btn-md", "btn-lg", "btn-sm", "btn-block"];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  const checkButtonStyle = styleOfButton.includes(buttonStyle)
    ? buttonStyle
    : styleOfButton[0];

  const checkButtonSize = sizeOfButton.includes(buttonSize) ? buttonSize : sizeOfButton[0];

//   test browser route
  return (
    <div>
      <Link to="expresso" className="btn-mobile">
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
          {children}
        </button>
      </Link>
    </div>
  );
}

export default Button;