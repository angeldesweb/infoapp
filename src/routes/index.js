import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from '../container/Login';
import MainContainer from '../container/Main';

export default ()=>(
    <Router>
        <Switch>
            <Route path="/login" component={Login} match history />
            <Route path='/' component={MainContainer} match history />
        </Switch>
    </Router>
)