import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        const remainingProduct = cart.filter(product => product.id !== id);
        setCart(remainingProduct)
        removeFromDb(id)
    }
    // clear from cart
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No items for review. please <Link to='/'>shop item</Link></h2>
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;