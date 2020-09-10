import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';


function NotFound() {
    return (
        <div>
            <h1>NOt FounD 404</h1>
        </div>
    )
}

function RoutePanel() {
    return (
        <div>



            <Router>
                <Switch>
                    <Route path="/login" ><Login /></Route>
                    <Route path="/checkout" >
                        <Header />
                        <Checkout/>
                    </Route>

                    <Route path="/" >
                        <Header />
                        <Home />

                    </Route>


                    <Route path="*" > <NotFound /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default RoutePanel
