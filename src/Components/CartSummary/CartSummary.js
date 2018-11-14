import React from 'react';
import './CartSummary.scss';
export default function CartSummary(props) {
    const { numberOfItems, cartTotal } = props.cartSummary;
    return (
        <div className="cart-summary-container">
            <div className="cart-summary-text">Your Cart Summary </div>
            <div className="grid-container">
                <div >Items in Cart</div>
                <div>Total Rs</div>
                <div>{numberOfItems}</div>
                <div>{cartTotal}</div>
            </div>
        </div>
    )
};