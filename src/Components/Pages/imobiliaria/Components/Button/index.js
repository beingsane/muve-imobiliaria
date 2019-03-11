import React, { Component } from "react";
import "../../css/style.css";

const Button = (props) => {
  return (
        <button
            className={`btn btn-outline-secondary mr-1 ${props.ButtonClass}`} 
            type="button"
          >
            {props.Text}
        </button>
  
  );
}

export default Button;
