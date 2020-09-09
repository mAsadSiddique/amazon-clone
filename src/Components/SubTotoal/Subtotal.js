import React from 'react';
import './Subtotal.css';
import Currencyformat from 'react-currency-format';

function Subtotal() {
    return (
        <div className="subtotal">
            <Currencyformat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal (0 Items ):
                    <strong>0</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />
                    This order Contains a gift
                </small>
                </>
            )}
            />
        </div>
    )
}

export default Subtotal
