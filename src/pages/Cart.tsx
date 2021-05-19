import React from 'react';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../redux/cartSlice';

const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems);
    return (
        <div className="flex flex-col min-w-full">
            Cart
        </div>
    )
};

export default Cart;
