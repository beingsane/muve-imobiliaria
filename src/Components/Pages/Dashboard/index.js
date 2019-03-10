import React, { Component } from 'react';
import './style.css';

import Sidebar from './dashSidebar/';
import Content from './Container/';

class Dashboard extends Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar />  
                <Content />
            </div> 
         );
    }
}

export default Dashboard;