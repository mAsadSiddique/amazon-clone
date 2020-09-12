import React from 'react';
import './Orders_1.css';
import moment from 'moment';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Currencyformat from 'react-currency-format';

function Orders_1({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>
                {moment.unix(order.data.created).format("YYYY-MM-DD, h:mma")}
            </p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {
                order.data.basket?.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton

                    />
                )

                )
            }

            <Currencyformat
                renderText={(value) => (
                    <h3 className="order__total">Order Details: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />


        </div>
    )
}

export default Orders_1
