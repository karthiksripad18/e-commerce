import React, {FunctionComponent} from 'react';
import { Route, Switch, Redirect, useLocation } from "react-router-dom";    
import Login from './pages/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import UserProfile from './pages/UserProfile';
import FinalOrder from './pages/FinalOrder';

const PrivateRoute = ({component: Component, path}: {component: FunctionComponent, path: string}) => {
    const location = useLocation();
    const token = sessionStorage.getItem('token');
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
            <PrivateRoute path="/orders" component={FinalOrder} />
            <PrivateRoute path="/products" component={Products} />
            <PrivateRoute path="/cart" component={Cart} />
            <PrivateRoute path="/user" component={UserProfile} />
            <PrivateRoute path="/" component={Home} />
        </Switch>
    );
}

export default Routes;
