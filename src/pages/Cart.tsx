import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
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
                    <Link to={'/products'}><button className="animate-bounce bg-primaryButton w-full p-2 rounded font-limelight">Shop Now</button></Link>
                </div>
                :
                <div className="flex flex-col lg:flex-row min-w-screen h-full items-center mt-2">
                    <div className="relative flex flex-col items-center h-full w-full lg:w-2/3 mx-5 overflow-scroll scrollbar-hide">
                        {
                            cart.items.map(
                                (item: any, i: any) => {
                                    return <Item key={i} productId= {item.productId} imageUrl={item.imageUrl} itemQuantity={item.quantity} price={item.totalPrice} />
                                }
                            )
                        }
                    </div>
                    <div className="font-limelight w-full flex flex-col justify-center items-center md:w-1/4">
                        <div className="flex md:flex-col">
                            <p className="text-4xl m-2">Grand Total</p>
                            <p className="text-5xl">${cart.grandTotal.toFixed(2)}</p>
                        </div>
                        <Link to={'/orders'}><button className="bg-primaryButton p-3 rounded m-2">Buy Now <FontAwesomeIcon icon={faArrowRight} color="white" /></button></Link>
                    </div>
                </div>
            }
        </>
    )
};

export default Cart;
