import React, { Component } from "react";
import "../../css/style.css";

import Button from '../Button/index';
import TypeSelect from '../Select/type';
import WhereSelect from '../Select/where';

const Search = (props) => {
  return (
    <div>
      <div className="row conteudo text-center">
        <div className="col-lg-3 col-12">
          <label for="teste">
            <span className="descricao">O que voce procura:</span>
          </label>
          <br />
          <Button buttonClass="mr-1 quadrado" Text="Alugar"/>

          <Button buttonClass="quadrado" Text="Comprar"/>
        </div>
        <div className="col-lg-3 col-12">
          <TypeSelect/>
        </div>

        <div className="col-lg-3 col-12">
          <WhereSelect />
        </div>
        <div className="col-lg-3 col-12">
          <label for="teste">
            <span buttonClass="descricao">Pesquisar por imóveis</span>
          </label>
          <br />
          <Button buttonClass="quadrado" Text="Pesquisar"/>
        </div>
      </div>
    </div>
  );
}

export default Search;
