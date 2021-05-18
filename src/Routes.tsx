import React, {FunctionComponent} from 'react';
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import {selectToken} from './redux/userSlice';
import Login from './pages/Login';
import Home from './pages/Home';

const PrivateRoute = ({component: Component, path}: {component: FunctionComponent, path: string}) => {
    const location = useLocation();
    const token = useSelector(selectToken);
    return (
        <Route exact path={path}>
            {
                token? 
                <Component />
                :
                <Redirect to ={{pathname: "/login", state: {from: location}}} />
            }
        </Route>
    );
}

const Routes = () => {
    return (
        <Switch>
            <Route path="/login"><Login /></Route>
            <PrivateRoute path="/" component={Home} />
        </Switch>
    );
}

export default Routes;
