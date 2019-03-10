import React, { Component } from 'react';
import './css/style.css';


class Square extends Component {
  render() {
    return(
    <div>
<div class="container-fluid first">
  <div class="homeText">
      <div class="container homeContainer">
        <h1 class="homeh1 ">IMOBILIARIA</h1><br/>
        <h4 class="homeh4 ">Nova casa, novo lar!</h4>
      </div>
  </div>
  <div className="search">
    <div class="row conteudo text-center">

<div class="col ">
<label for="teste"><span class="descricao">O que voce procura:</span></label><br/>
<button class="btn btn-outline-secondary btn-comprar quarenta quadrado descricao" type="button">Comprar</button>
<button class="btn btn-outline-secondary btn-comprar quarenta quadrado descricao" type="button">Aluguel</button>
</div>

<div class="col ">
<label for="teste"><span class="descricao">Tipo</span></label><br/>
<select class="custom-select quarenta quadrado" id="inputGroupSelect02">
   <option selected>Choose...</option>
   <option value="1">One</option>
   <option value="2">Two</option>
   <option value="3">Three</option>
 </select>

</div>

<div class="col ">
<label for="teste"><span class="descricao">Onde?</span></label><br/>
<select class="custom-select quarenta quadrado" id="inputGroupSelect02">
   <option selected>Choose...</option>
   <option value="1">One</option>
   <option value="2">Two</option>
   <option value="3">Three</option>
 </select>
</div>
<div class="col ">
  <label for="teste"><span class="descricao">Pesquisar por imóveis</span></label><br/>
  <button class="btn btn-outline-secondary btn-pesquisar quarenta quadrado descricao" type="button">Pesquisar</button>
</div>
</div>

  </div>
  </div>




  <div class="container-fluid second">
    <div class="container">
      <div class="row">
  <div class="col-md-4 imgTrio text-center">
    <div class="overlay">
    <img src="./img/1.jpg" alt="" title=""></img>
    <div class="conteudoBg">
      <p>Clique aqui para fazer uma busca refinada lorem ipsum.</p>
      <button class="btn btn-outline-secondary quarenta quadrado btn-trio" type="button">Refinar Busca</button>
    </div>
    </div>
  </div>
  <div class="col-md-4 imgTrio text-center">
    <div class="overlay">
    <img src="./img/2.jpg" alt="" title=""></img>
    <div class="conteudoBg">
      <p>Clique aqui para ver os imóveis que foram adicionados recentemente.</p>
      <button class="btn btn-outline-secondary quarenta quadrado btn-trio" type="button">Ver Imoveis</button>
    </div>
    </div>
  </div>
  <div class="col-md-4 imgTrio text-center" >
    <div class="overlay">
        <img src="./img/3.jpg" alt="" title=""></img>
      <div class="conteudoBg">
        <p>Clique aqui para fazer uma busca refinada lorem ipsum.</p>
        <button class="btn btn-outline-secondary quarenta quadrado btn-trio" type="button">Agendar Visita</button>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>

  <div class="container-fluid third">
    <div class="container text-center conteudoThird">
      <h2>Solicitar Uma Ligação</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.</p>
  <div class="input-group mb-3">
      <input type="text" class="form-control quadrado" placeholder="Digite o numero" aria-label="" aria-describedby="button-addon2" />
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
      <ul>
        <h5>Lorem</h5>
        <li>bla</li>
        <li>ble</li>
        <li>bli</li>
        <li>blo</li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <h5>Lorem</h5>
        <li>bla</li>
        <li>ble</li>
        <li>bli</li>
        <li>blo</li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <h5>Lorem</h5>
        <li>bla</li>
        <li>ble</li>
        <li>bli</li>
        <li>blo</li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <h5>Lorem</h5>
        <li>bla</li>
        <li>ble</li>
        <li>bli</li>
        <li>blo</li>
      </ul>
    </div>
    <div class="col-md-4">
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
