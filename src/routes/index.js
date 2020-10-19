import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from '../components/views/Login';
import Home from '../components/views/Home';

const Destacada = ()=> <h1>Destacada</h1>

const Accounts = () => <h1>Accounts</h1>

export default (props) => (
    <Router>
        <Switch>
            <Route path='/login' render={(props)=>(<Login {...props} />)} />
            <Route path='/destacada' render={(props)=>(<Destacada {...props}  />)} />
            <Route path='/accounts' render={(props)=>(<Accounts {...props} />)} />
            <Route path='/' render={(props)=>(<Home {...props} />)} />
        </Switch>
    </Router>
)