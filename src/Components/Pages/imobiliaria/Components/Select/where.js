import React, { Component } from "react";
import "../../css/style.css";

const WhereSelect = (props) => {
  return (
    <div>
        <label for="teste">
            <span className="descricao">Onde?</span>
            </label>
            <br />
        <select
        className="custom-select quarenta quadrado"
        id="inputGroupSelect02"
        >
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
  );
}

export default WhereSelect;
