import React from 'react';
import './ItemQuantityDetail.scss';
export default function ItemQuantityDetail(props){
    const {quantity, addItemToCart,updateCartItemQty,id } = props;
    return (
        <React.Fragment>
            { quantity ? (
               <div className="qunatity-container">
                <button className="increment-button" onClick={(e)=>{updateCartItemQty(id,true)}} >+</button>
                <span className="qty-description">
                  {quantity} in Cart
                </span>
                <button className="decrement-button" onClick={(e)=>{updateCartItemQty(id,false)}}>-</button>
               </div>
               ) :
              (<div>
                <button className="add-to-cart-button" onClick={addItemToCart} value ={id}> Add to cart </button> 
               </div>
              )
            }
        </React.Fragment>
    )
};