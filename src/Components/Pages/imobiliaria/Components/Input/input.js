import React, { Component } from "react";
import "../../css/style.css";

import Button from '../Button/index';

const Input = (props) => {
  return (
        <input type="text" class="form-control quadrado" placeholder={props.placeholder} aria-label="" aria-describedby="button-addon2" />  
  );
}

export default Input;
