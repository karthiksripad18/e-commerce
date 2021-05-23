import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectCartItems} from '../redux/cartSlice';
import Item from '../components/Item';

const Cart = () => {
    const cart: any = useSelector(selectCartItems);

    return (
        <>
            {
                cart.items.length > 0?
                <div className="flex flex-col min-w-screen items-center mt-2">
                    {
                        cart.items.map(
                            (item: any, i: any) => {
                                return <Item key={i} productId= {item.productId} imageUrl={item.imageUrl} itemQuantity={item.quantity} price={item.totalPrice} />
                            }
                        )
                    }
                </div>
                :
                <div className="min-h-full flex flex-col justify-center items-center">
                    <h1 className="text-5xl mb-5">Your cart is empty</h1>
                    <Link to={'/products'}><button className="animate-bounce bg-primaryButton w-full p-2 rounded font-sans">Add Items</button></Link>
                </div>
            }
        </>
    )
};

export default Cart;
