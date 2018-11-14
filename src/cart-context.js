import React from "react";

const CartContext = React.createContext({
    items:[],
    cartItems:[],
    removeItemFromCart(){},
    updateCartItemQty(){},
    addItemToCart(){}
});

export const Provider = CartContext.Provider;
export const Consumer = CartContext.Consumer;