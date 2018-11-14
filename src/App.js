import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './cart-context';
import ItemList from './Containers/ItemList/ItemList';
import Cart from './Containers/Cart/Cart';

const items = [
  {
    item_id: 1,
    item_name: 'biryaniMasala1',
    item_brand: 'Brand1',
    item_detail: 'risk involved',
    item_price: 50,
    item_qty: 0,
    currencyType: 'Rs'
  },
  {
    item_id: 2,
    item_name: 'biryaniMasala2',
    item_brand: 'Brand2',
    item_detail: '20% risk involved',
    item_price: 40,
    item_qty: 0,
    currencyType: 'Rs'
  },
  {
    item_id: 3,
    item_name: 'biryaniMasala3',
    item_brand: 'Brand3',
    item_detail: '30% risk involved',
    item_price: 100,
    item_qty: 0,
    currencyType: 'Rs'
  },
  {
    item_id: 4,
    item_name: 'biryaniMasala4',
    item_brand: 'Brand4',
    item_detail: 'risk involved',
    item_price: 500,
    item_qty: 0,
    currencyType: 'Rs'
  },
  {
    item_id: 5,
    item_name: 'biryaniMasala5',
    item_brand: 'Brand5',
    item_detail: 'risk involved',
    item_price: 500,
    item_qty: 0,
    currencyType: 'Rs'
  }];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items,
      cartItems :[],
      removeItemFromCart: this.removeItemFromCart,
      updateCartItemQty: this.updateCartItemQty,
      addItemToCart: this.addItemToCart
    }
  }
  //Remove Items from Cart Array and Update Item Array Qty Detail
  removeItemFromCart = (event) => {
    const itemId = event.target.value;
    
    const cartItems = this.state.cartItems.filter(item => item.item_id !== parseInt(itemId));
    
    const items = this.state.items.map(item => {
      if (item.item_id === parseInt(itemId)) {
        item.item_qty = 0;
      }
      return item;
    })

    this.setState({cartItems,items});
  }

  //Update Cart Array , update qty of Item Array
  addItemToCart = (event) => {
    const itemId = event.target.value;

    const itemToAdd = this.state.items.find(item => {
      if (item.item_id === parseInt(itemId)) {
        item.item_qty = 1;
        return item;
      }
    });

    const items = this.state.items.map(item=>{
      if (item.item_id === parseInt(itemId)) {
        item.item_qty = 1;
      }
      return item;
    });

    const cartItems= [itemToAdd,...this.state.cartItems];
    this.setState({ cartItems,items });
  }


  //Update Item Quantity and cartItem Quantity
  updateCartItemQty = (itemId, isIncrement) => {
    let shpuldRemoveItemFromCart = false;
    let itemQuantity = 0;

    const updatedItems = this.state.items.filter(item => {
      if (item.item_id === parseInt(itemId)) {
        item.item_qty = isIncrement ?item.item_qty + 1 : item.item_qty -1;
        itemQuantity = item.item_qty;
        shpuldRemoveItemFromCart = !item.item_qty ? true : false;
        return item;
      }
      return item;
    });
    
    const updatedCartItems = this.state.cartItems.filter(cartItem=>{
      if(cartItem.item_id === parseInt(itemId)){
        if(!shpuldRemoveItemFromCart){
          cartItem.item_qty = itemQuantity;
          return cartItem;
        }
      }
      else 
        return cartItem;
    });

    this.setState({ items:updatedItems,cartItems:updatedCartItems });
  }

  render() {
    return (
      <Provider value={this.state}>
        <ItemList />
        <Cart />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
module.hot.accept();