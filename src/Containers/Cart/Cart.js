import React from 'react';
import { Consumer } from '../../cart-context';
import CartSummary from '../../Components/CartSummary/CartSummary';
import CartList from '../../Components/CartList/CartList';
import './Cart.scss';

class Cart extends React.Component {

    calculateCartSummary = (items = []) => {
        let cartSummary = {
            numberOfItems: 0,
            cartTotal: 0
        };
        if (items && items.length > 0) {
            cartSummary.numberOfItems = items.length;
            cartSummary.cartTotal = items.reduce((total, obj) => ((obj.item_qty * obj.item_price) + total), 0);
        }
        return cartSummary;
    }

    render() {
        const { cartItems, removeItemFromCart } = this.props.cartInfo;
        const cartSummary = this.calculateCartSummary(this.props.cartInfo.cartItems);
        return (
            <React.Fragment>
               
                {cartItems.length > 0 ?
                    (<div className="cart-container"><CartSummary cartSummary={cartSummary} />
                        <CartList cartItems={cartItems} removeItemFromCart={removeItemFromCart} />
                    </div>) : null
                }
            </React.Fragment>
        );
    }
}

export default function CartWithContext() {
    return (
        <Consumer>
            {context => <Cart cartInfo={context} />}
        </Consumer>
    )
}