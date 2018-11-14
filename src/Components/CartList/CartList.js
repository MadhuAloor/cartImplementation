import React from 'react';
import  './CartList.scss';

export default class CartList extends React.Component {
    handleRemoveItemFromCart = (id) => {
        this.props.removeItemFromCart(id);
    }
    render() {
        const { cartItems } = this.props;
        return (
            <React.Fragment>
                <table className="cart-table">
                    <tbody>
                        <tr className="cart-summary-table-row">
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>TotalRs</th>
                            <th></th>
                        </tr>
                        {cartItems.map(item => {
                            return <tr className="cart-summary-table-data" key={item.item_id}>
                                <td>{item.item_name}</td>
                                <td>{item.item_qty}</td>
                                <td>{item.item_price * item.item_qty}</td>
                                <td><button onClick={this.handleRemoveItemFromCart} value={item.item_id}>Remove</button></td>
                            </tr>

                        })}
                    </tbody>

                </table>
            </React.Fragment>
        )
    }
}