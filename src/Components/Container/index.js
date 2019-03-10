import React, { Component } from 'react';
import './style.css';

import Navbar from '../Container/navbarContainer/';
import Square from '../Container/squares/';
import Breadcrumb from '../Container/breadcrumb/';

class Container extends Component {
    render() {
        return (
            <div>              
                  <Navbar />
                  <Breadcrumb />
                <div className="content">
                <div className="row">
                    <div className="col-lg-3">
                        <Square cardTitle="Clientes" cardClass="card darkblue" cardSubtitle="testedsdsdsdasdsadsadsadsa" cardText="lorem ipsum" />
                    </div>
                    <div className="col-lg-3">
                        <Square cardTitle="Financeiro" cardClass="card accentblue" cardSubtitle="teste" cardText="lorem ipsum" />
                    </div>
                    <div className="col-lg-3">
                        <Square cardTitle="Qualidade" cardClass="card lightblue" cardSubtitle="teste" cardText="lorem ipsum" />
                    </div>
                    <div className="col-lg-3">
                        <Square cardTitle="Suporte" cardClass="card verylight" cardSubtitle="teste" cardText="lorem ipsum" />
                    </div>
                </div>

                <hr />


            </div>
            </div>

         );
    }
}

export default Container;