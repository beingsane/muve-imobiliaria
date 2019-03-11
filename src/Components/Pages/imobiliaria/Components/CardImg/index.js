import React, { Component } from "react";
import "../../css/style.css";

import Button from '../Button/index';

const CardImg = (props) => {
  return (
    <div class="col-md-4 imgTrio text-center">
    <div class="overlay">
    <img src="./img/1.jpg" alt="" title="">{props.imgSrc}</img>
    <div class="conteudoBg">
      <p>{props.cardText}</p>
        <Button ButtonClass="quadrado" Text={props.Text}/>
    </div>
    </div>
  </div>
  
  );
}

export default CardImg;
