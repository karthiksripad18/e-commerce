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
                cart.items.length === 0? 
                <div className="min-h-full flex flex-col justify-center items-center">
                    <h1 className="text-5xl mb-5">Your cart is empty</h1>
                    <Link to={'/products'}><button className="animate-bounce bg-primaryButton w-full p-2 rounded font-sans">Add Items</button></Link>
                </div>
                :
                <div className="flex flex-col lg:flex-row min-w-screen h-full items-center mt-2">
                    <div className="flex flex-col items-center h-5/6 w-full lg:w-1/2 mx-2 overflow-scroll scrollbar-hide">
                        {
                            cart.items.map(
                                (item: any, i: any) => {
                                    return <Item key={i} productId= {item.productId} imageUrl={item.imageUrl} itemQuantity={item.quantity} price={item.totalPrice} />
                                }
                            )
                        }
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <p className="text-5xl">Payment Form</p>
                    </div>
                </div>
            }
        </>
    )
};

export default Cart;
