import React from "react";
import "./Button.css";
import { IoMdArrowForward } from "react-icons/io";

function Button({ data, size }) {
  return (
    <div className="buttons">
      <button>{data}</button>
      <IoMdArrowForward size={size} />
    </div>
  );
}

export default Button;
