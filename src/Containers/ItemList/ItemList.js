import React from 'react';
import { Consumer } from '../../cart-context';
import Item from './../../Components/Item/Item';
import './ItemList.scss';
class ItemList extends React.Component {
    render() {
        const { items, addItemToCart, updateCartItemQty } = this.props.itemData;
        return (
            <div className="item-list-container">
                <div className="item-card-container">
                    {items.map((item, index) => (
                        <Item
                            key={item.item_id}
                            id={item.item_id}
                            name={item.item_name}
                            brand={item.item_brand}
                            detail={item.item_detail}
                            price={item.item_price}
                            quantity={item.item_qty}
                            updateCartItemQty={updateCartItemQty}
                            addItemToCart={addItemToCart}
                            currencyType={item.currencyType}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default function ItemListWithContext() {
    return (
        <Consumer>
            {context => <ItemList itemData={context} />}
        </Consumer>
    )
}