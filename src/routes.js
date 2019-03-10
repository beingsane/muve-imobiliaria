import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Components/Login/';
import Dashboard from './Components/Dashboard/';

const Routes = () => (
    <BrowserRouter>
        <Switch> 
            <Route exact path="/" component={Login}></Route>   
            <Route path="/dashboard/" component={Dashboard}></Route>   
        </Switch>
    </BrowserRouter>
);

export default Routes;