import React from 'react';
import './Checkout.css';
import Subtotal from '../SubTotoal/Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
// import FlipMove from 'react-flip-move';
import { Helmet } from 'react-helmet';

function Checkout() {
    const [{ basket, user }] = useStateValue();
    console.log(user?.email);
    return (
        <div className="checkout">
            <Helmet>
                <title>Shopping</title>
            </Helmet>
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkout_ad"
                />

                <div>

                    <h2 className="checkout__title">
                        Basket items list
                    </h2>
                    <div >
                        {/* <FlipMove className="flip-wrapper" style={{ color: 'red' }} > */}
                            {
                                basket.map(item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))
                            }
                        {/* </FlipMove> */}
                    </div>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
