import React from 'react';
import './Subtotal.css';
import Currencyformat from 'react-currency-format';
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {

    const history = useHistory();
    const [{ basket }] = useStateValue();

    // const amount = () => {
    //     let totalAmount = 0;
    //     for (var i = 0; i < basket.length; i++) {
    //         if (basket[i].price > 0)
    //             totalAmount += basket[i].price;
    //             console.log(totalAmount);
    //     }
    //     return totalAmount;
    // }

    return (
        <div className="subtotal">
            <Currencyformat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} Items ):
                <strong>$ {value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                    This order Contains a gift
                </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
