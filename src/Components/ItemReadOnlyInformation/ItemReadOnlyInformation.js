import React from 'react';
import  './ItemReadOnlyInformation.scss';

export default  function ItemReadOnlyInformation(props){
    const { name, brand, detail, price, quantity, updateCartItemQty, currencyType } = props;
return (
   <div  className="read-only-view-container">
      <div className="item-image-place-holder">
      img
      </div>
      <div className="brand">
      {brand}
      </div>
      <div className="item-name">
      {name}
      </div>
      <div>
      {detail}
      </div>
      <div className="price">
      {currencyType}{price}
      </div>
   </div>
)
};