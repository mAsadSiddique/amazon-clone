import React, { useEffect } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders/Orders';


function NotFound() {
    return (
        <div>
            <h1>NOt FounD 404</h1>
        </div>
    )
}


const promise = loadStripe("pk_test_51HPwxaLozDy7Ej3Rh2dMVLKquYMoW7cB5AEApDduQJXMhe55JHpek8ObqiBKIFb6RA7vF5eKuSUSpA6HLoWpEedr009S5gfs5N");

function RoutePanel() {
    const [ dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the components loads...
        auth.onAuthStateChanged(authUser => {
            // console.log('The User is >>> ', authUser);
            if (authUser) {
                // the user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } else {
                // user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])


    return (
        <div>



            <Router>
                <Switch>
                    <Route path="/orders" >
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/login" ><Login /></Route>
                    <Route path="/checkout" >
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise} >
                            <Payment />
                        </Elements>
                    </Route>

                    <Route path="/" >
                        <Header />
                        <Home />
                    </Route>

                    <Route path="*" >
                        <Header />
                        <NotFound />
                    </Route>

                </Switch>
            </Router>
        </div>
    )
}

export default RoutePanel
