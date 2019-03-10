import React, { Component } from "react";
import "./style.css";

const Square = (props) => {
  return(
<div className={props.cardClass} style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <h6 className="card-subtitle mb-2">{props.cardSubtitle}</h6>
          <p className="card-text">
            {props.cardText}
          </p>
        </div>
      </div>

    )
}

export default Square;
