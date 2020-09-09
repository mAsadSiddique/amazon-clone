import React, { useContext } from 'react';
import './Subtotal.css';
import Currencyformat from 'react-currency-format';
import { useStateValue } from '../StateProvider'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    // console.log(basket.map((_, i) => {

    //     let totalAmount = 0;
    //     for (var i = 0; i < basket.length; i++) {
    //         if (basket[i].price > 0)
    //             totalAmount += basket[i].amount
    //     }
    // }))

    const amount = () => {
        let totalAmount = 0;
        for (var i = 0; i < basket.length; i++) {
            if (basket[i].price > 0)
                totalAmount += basket[i].price
        }
        return totalAmount;
    }

    console.log(amount())

    return (
        <div className="subtotal">
            <Currencyformat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} Items ):
                <strong>$ {amount()}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                    This order Contains a gift
                </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
