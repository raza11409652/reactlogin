import React from 'react';
import {BrowserRouter, Route ,  Switch} from 'react-router-dom';
import Login from '../Components/Login/Login'
import Error from '../Components/Error/Error' 
import Home from '../Components/Home/Home'
const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/dash" component={Home}/>
            <Route path="*" component={Error}/>
        </Switch>
    </BrowserRouter>
    );
    export default Routes;