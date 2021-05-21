import React from 'react';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../redux/cartSlice';
import Item from '../components/Item';

const Cart = () => {
    const cart: any = useSelector(selectCartItems);

    return (
        <div className="flex flex-col min-w-screen items-center mt-2">
            {
                cart.items.map(
                    (item: any, i: any) => {
                        return <Item productId= {item.productId} imageUrl={item.imageUrl} itemQuantity={item.quantity} price={item.totalPrice} />
                    }
                )
            }
        </div>
    )
};

export default Cart;
