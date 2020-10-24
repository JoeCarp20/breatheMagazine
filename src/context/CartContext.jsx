import React, { useReducer } from 'react';

// utils
import { dummyContextFunction } from '../utils/common';

const cartReducer = (state, action) => {
  switch(action.type) {
        
    case 'ADD_ITEM':
      state = [...state, action.payload]
      return state
        
    case 'REMOVE_BY_ID':
      state = state.filter(item => item.id !== action.payload)
      return state
        
    case 'UPDATE_BY_ID':
      state = state.map(item => {    
        if (item !== action.payload.id) return item
        return { ...item, ...action.payload.item }
    })

    case 'INCREMENT_BY_ID':

      let {item, amount} = action.payload

      let _state = state.map(_item => {
        if (item.id !== _item.id) return _item;

        let quantity = _item.quantity + amount;
        if (quantity < 0) quantity = 0;

        return { ...item, quantity }
      })

      return _state;
      
      case 'CLEAR':
        return [];

      case 'LOAD':
        return action.payload;

      default:
        return state;
  }

}

const CartContext = React.createContext({
  addItem: dummyContextFunction,
  removeItem: dummyContextFunction,
  updateItem: dummyContextFunction,
  incrementItem: dummyContextFunction,
  getCart: () => dummyContextFunction([]),
  clearCart: dummyContextFunction,
  loadCart: dummyContextFunction
});

const CartProvider = ({children}) => {

    const [cart, dispatch] = useReducer(cartReducer, []);

    const addItem = (item) => {
      let productIds = cart.map(i => i.id)
      
      if ( productIds.includes(item.id) ) {
        return dispatch({type: 'INCREMENT_BY_ID', payload: {item, amount: 1}})
      }

      dispatch({type: 'ADD_ITEM', payload: item})
    };
    const removeItem = (item) => dispatch({type: 'REMOVE_BY_ID', payload: item.id});
    const updateItem = (item) => dispatch({type: 'UPDATE_BY_ID', payload: item});
    const incrementItem = (item, amount) => dispatch({type: 'INCREMENT_BY_ID', payload: {item, amount}});
    const getCart = () => cart;
    const clearCart = () => dispatch({type: 'CLEAR'});
    const loadCart = (cart) => dispatch({type: 'LOAD', payload: cart});

    return (
        <CartContext.Provider value={{
            addItem,
            removeItem,
            updateItem,
            incrementItem,
            getCart,
            clearCart,
            loadCart
        }}>
            {children}
        </CartContext.Provider>

    )

};

export default CartContext
export { CartProvider }