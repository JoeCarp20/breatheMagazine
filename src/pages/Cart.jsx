import React, { useContext, useEffect, useState } from 'react';

// components
import { handleCheckout } from '../utils/stripe';

// utils
import useAllStripePrice from '../utils/useAllStripePrice';
import CartContext from '../context/CartContext';
import notify, { notifyTypes } from '../utils/notify';

const Cart = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const { getCart, removeItem, incrementItem} = useContext(CartContext);
    const allStripePrice = useAllStripePrice();

    const cart = getCart();

    useEffect(() => {
        if (!cart.length && selectedItem) {
            setSelectedItem(null)
        }
    })

    const checkout = () => {
        if (!cart.length) return console.log('no items in cart');

        // save the cart into local storage for after redirect
        localStorage.setItem('cart', JSON.stringify(cart));

        let lineItems = cart.map( item => ({
            price: item.id,
            quantity: item.quantity
        }))

        handleCheckout(lineItems).then( () => {
            notify(`Oops! Looks like we're experiencing an error.`, notifyTypes.ERROR);
        })
    }

    const getCartTotal = () => {
        return cart.reduce( (acc, item) => {
            acc = acc + ( item.price * item.quantity);
            return acc
        }, 0)
    }

    return (
        <div className={'cart'}>

            { !cart.length &&
              <div className={'empty-cart'}>
                <p>There are no items in your cart</p>
              </div>
            }

            <div className={'grid-2'}>

              { cart.map( (item, index) => {

                let product = allStripePrice.find(i => i.id === item.id)

                let image = product.product.images[0];
                let name = product.product.name;

                return <div key={index} className={'cart-row'}>

                  <img src={image} alt=""/>

                  <div className={'description-box'}>
                    
                    <div className={'description-item'}>
                      <p>Name</p>
                      <p>{name}</p>
                    </div>

                    <div className={'description-item'}>
                      <p>Price</p>
                      <p>{item.price}</p>
                    </div>

                    <div className={'description-item'}>
                      <p>Quantity</p>
                      <p>{item.quantity}</p>
                    </div>

                  </div>

                  <div className={'row-controls'}>
                    <button className={'increment'} onClick={() => incrementItem(item, 1)}>+1</button>
                    <button className={'decrement'} onClick={() => incrementItem(item, -1)}>-1</button>
                    <button className={'remove'}>Remove</button>
                  </div>


                </div>

              })}

            </div>


            <div className={'checkout-button'}>
                <button 
                  onClick={checkout}
                  disabled={!cart.length}
                  
                >CHECK OUT | ${ getCartTotal() }</button>
            </div>

        </div>
    )
}

export default Cart;