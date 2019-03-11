import React, { Component } from 'react';
import './css/style.css';


import FirstText from './Components/FirstText/index';
import Search from './Components/Search/search';
import CardImg from './Components/CardImg/index';
import Input from './Components/Input/input';
import List from './Components/List/index';


class Square extends Component {
  render() {
    return(
    <div>
<div className="wrapper">
    <div class="container-fluid first">
        <FirstText head="IMOBILIARIA" slogan="Casa nova, vida nova!"/>
    </div>
    <Search/>
</div>

  <div class="container-fluid second">
    <div class="container">
      <div class="row">
      <CardImg cardText="Teste" Text="Botao"/>
      <CardImg cardText="Teste" Text="Botao"/>
      <CardImg cardText="Teste" Text="Botao"/>
      </div>
    </div>
  </div>

  <div class="container-fluid third">
    <div class="container text-center conteudoThird">
      <h2>Solicitar Uma Ligação</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.</p>
  <div class="input-group mb-3">
      <Input />
      <div class="input-group-append">
  <button class="btn btn-outline-secondary quadrado" type="button" id="button-addon2">Confirmar</button>
  </div>
</div>
    </div>
  </div>

  <div class="container-fluid footer">
    <div class="container">

      <div class="row">
    <div class="col">
      <List />
    </div>
    <div class="col">
      <List />
    </div>
    <div class="col">
      <List />
    </div>
    <div class="col">
     <List />
    </div>
    <div class="col-12 col-md-4">
      <p>Rua bonitona , 405 - 3131300-555<br/> 31-9 4445-8454</p>
    </div>
      </div>
      <hr/>
    </div>
  </div>
  </div>

    );
  }
}

export default Square;
