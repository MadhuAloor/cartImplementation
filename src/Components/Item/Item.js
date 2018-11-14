import React from 'react';
import ItemReadOnlyInformation from './../../Components/ItemReadOnlyInformation/ItemReadOnlyInformation';
import ItemQuantityDetail from './../../Components/ItemQuantityDetail/ItemQuantityDetail';
import  './Item.scss';
export default class Item extends React.Component {
    render(){
        const { name,id, brand, detail, price, quantity,addItemToCart, updateCartItemQty, currencyType } = this.props;
        return (
            <div className="item-card">
                <ItemReadOnlyInformation
                    name={name}
                    brand={brand}
                    detail={detail}
                    price={price}
                    currencyType={currencyType}
                />
                <ItemQuantityDetail
                    id = {id} 
                    quantity={quantity}
                    updateCartItemQty={updateCartItemQty} 
                    addItemToCart = {addItemToCart}
                    />
            </div>
        );
    }

}