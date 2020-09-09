import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
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
            <Header />


            <Routes>
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}

export default RoutePanel
