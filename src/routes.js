import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Components/Pages/Login/';
import Dashboard from './Components/Pages/Dashboard/';
import Imobiliaria from './Components/Pages/imobiliaria/';

const Routes = () => (
    <BrowserRouter>
        <Switch> 
            <Route exact path="/" component={Login}></Route>   
            <Route path="/dashboard/" component={Dashboard}></Route>
            <Route path="/imobiliaria/" component={Imobiliaria}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;