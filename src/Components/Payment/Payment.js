import React, { useState, useEffect } from 'react';
import './payment.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from 'axios';


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecrets, setClientSecrets] = useState(true);


    useEffect(() => {
        // generally the special strip secret which allows us to charge
        // a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                // strip expects the total in a currencies sub units
                url: `/payment/create?total=${getBasketTotal(basket)}`
            });
            setClientSecrets(response.data.clientSecrets);
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (e) => {
        //  do all the fancy strip stuff...
        e.preventDefault();
        setProcessing(true);



        const payload = await stripe.confirmCardPayment(clientSecrets, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ responseIntent }) => {
            // paymentIntent = payment Conformation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders')
        })

    }

    const handleChange = (e) => {
        // Listen for changes in the CardElement
        // and display any error as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");

    }



    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items </Link>)
                </h1>
                {/* payment Section */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Line</p>
                        <p>Los Angles CA</p>
                    </div>

                </div>

                {/* Payment Section - Review items */}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go here */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Oder Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button
                                    disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>processing</p> :
                                        "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment;
