import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="container-fluid homeFirst">
                 <div className="card text-center" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Special</h5>
                        <p className="card-text" style={{color:'red'}}>With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
                        <Link to="/imobiliaria" className="btn btn-primary">Homepage</Link>
                    </div>
                </div>
            </div>
         );
    }
}

export default Login;