import React, { useContext, useEffect } from 'react';

// components
import Image from 'gatsby-image';
import { handleCheckout } from '../utils/stripe';

// utils
import useAllStripePrice from '../utils/useAllStripePrice';
import CartContext from '../context/CartContext';
import notify, { notifyTypes } from '../utils/notify';


const ProductGrid = ({path}) => {

    const allStripePrice = useAllStripePrice();
    const { getCart, clearCart, loadCart, removeItem, addItem, incrementItem } = useContext(CartContext);


    useEffect(() => {
        if (path === '/success/') return handleSuccess();
        if (path === '/cancel/') return handleCancel();
    }, [])

    const handleSuccess = () => {
        // clear local storage and cart
        localStorage.clear();
        clearCart();

        notify('Success!', notifyTypes.SUCCESS);
    }

    const handleCancel = () => {
        // parse cart from localStorage, then clear localStorage
        const cart = JSON.parse( localStorage.getItem('cart') );
        localStorage.clear();

        console.log(cart)

        // if there are items in the cart, reload cart
        if (cart && cart.length) { 
            loadCart(cart)
            notify(`Don't worry, we've kept your items safe`, notifyTypes.INFO);
        }

    }

    const checkout = () => {

        let cart = getCart();
        if (!cart.length) return console.log('no items in cart');

        // save the cart into local storage for after redirect
        localStorage.setItem('cart', JSON.stringify(cart));


        let lineItems = cart.map( item => ({
            price: item.id,
            quantity: item.quantity
        }))

        handleCheckout(lineItems).then(error => {
            notify(`Oops! Looks like we're experiencing an error.`, notifyTypes.ERROR);
        })
    }
    
    return (
        <div>

            <button onClick={checkout}>CHECK OUT</button>

            { getCart().map( (item, index) => {

                let { id, price, quantity } = item;

                return (
                    <div key={index}>
                        <p>{id} | {price} | {quantity}</p> 
                        <button onClick={() => removeItem(item)}>remove</button>
                        <button onClick={() => incrementItem(item, 1)}>+1</button>
                        <button onClick={() => incrementItem(item, -1)}>-1</button>
                    </div>
                )

            } )}

            { allStripePrice.map((price, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => addItem({id: price.id, price: 100, quantity: 1})}
                    >
                        {price.product.name}
                    </button>
                )
            })}
        </div>
    )

}

export default ProductGrid;