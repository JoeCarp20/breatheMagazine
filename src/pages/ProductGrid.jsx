import React, { useContext, useEffect, useState } from 'react';

// components
import Cart from './Cart';

// utils
import useAllStripePrice from '../utils/useAllStripePrice';
import CartContext from '../context/CartContext';
import notify, { notifyTypes } from '../utils/notify';


const ProductGrid = ({path}) => {

    const allStripePrice = useAllStripePrice();
    const { clearCart, loadCart, addItem } = useContext(CartContext);
    const [selectedItem, setSelectedItem] = useState(null)

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

        // if there are items in the cart, reload cart
        if (cart && cart.length) { 
            loadCart(cart)
            notify(`Don't worry, we've kept your items safe`, notifyTypes.INFO);
        }

    }
    
    return (
        <div id={'product-grid'}>

            { selectedItem && 
                <SelectedItemModal 
                    item={selectedItem}
                    exitModal={() => setSelectedItem(null)}    
                />
                }

            <div className={'grid-4'}>
                { allStripePrice.map((price, index) => {

                    console.log(price)
                    let image = price.product.images[0]

                    return (
                        <div 
                            key={index}
                            className={'product-item'}
                            onClick={() => setSelectedItem(price)}
                        >
                            <img src={image} alt=""/>
                            <p>{price.product.name} | ${price.unit_amount / 100}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )

}



const SelectedItemModal = ({item, exitModal}) => {

    const { addItem } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    let image = item.product.images[0];
    let name = item.product.name;
    let description = item.product.description;
    let price = (item.unit_amount / 100).toFixed(2);


    const handleAddItem = () => {
        addItem({id: item.id, price, quantity})
        setTimeout(exitModal, 500)
    }

    return <div className={'selected-item-modal'}>

        <div className={'selected-item-modal-inner'}>
            <img src={image} alt=""/>
            <p>{name} | ${price}</p>
            
            <div className={'description'}>
                <p>{description}</p>
            </div>

            <div className={'quantity-selector'}>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                <p>{ quantity }</p>
                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            </div>

            <div className={'add-to-cart-button'}>
                <button onClick={handleAddItem}>Add to Cart</button>
            </div>
        </div>

    </div>
}

export default ProductGrid;