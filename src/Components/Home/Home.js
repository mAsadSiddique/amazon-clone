import React from 'react';
import "./Home.css";
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="home" />
            </div>

            <div className="home__row">
                <Product
                    title="The Lean Startup"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51mDUtXlJzL.jpg"
                    rating={3}
                />
                <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Backing, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
                    price={2390.0}
                    image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product
                    title="Sumsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX566_.jpg"
                    rating={3} />
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />

            </div>

        </div>
    )
}

export default Home
