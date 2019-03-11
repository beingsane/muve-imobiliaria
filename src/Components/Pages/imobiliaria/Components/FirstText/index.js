import React, { Component } from "react";
import "../../css/style.css";

const FirstText = (props) => {
  return (
    <div>
     <div class="container homeContainer">
        <h1 class="homeh1">{props.head}</h1><br/>
        <h4 class="homeh4">{props.slogan}</h4>
      </div>
    </div>
  );
}

export default FirstText;
