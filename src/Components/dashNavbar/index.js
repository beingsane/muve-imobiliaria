import React, { Component } from 'react';
import './style.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebarHead">
                    <h1 className="logo">muve.</h1>
                </div>
                <div className="sidebarContent">
                <ul class="list-group">
                    <li class="list-group-item active-list">Home</li>
                    <li class="list-group-item">Negocios</li>
                    <li class="list-group-item">Financas</li>
                    <li class="list-group-item">Vendas</li>
                    <li class="list-group-item">Configuracoes</li>
                    </ul>
                </div>
            </div>
         );
    }
}

export default Sidebar;