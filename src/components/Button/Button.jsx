import React from "react";

// import "./Button.scss";

const Button = ({ type, children, className, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
