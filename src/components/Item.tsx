import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart, decrementItemFromCart} from '../redux/cartSlice';

const Item = ({productId, imageUrl, itemQuantity, price}: {productId: number, imageUrl: string; itemQuantity: any, price: any}) => {
    const dispatch = useDispatch();

    return (
        <div className="text-primary font-sans mx-2 container rounded shadowed-2xl bg-white min-w-fill min-h-300px m-3 flex justify-evenly">
            <div className="my-2">
                <img src={imageUrl} alt="" width="150" height="150" />
            </div>
            <div className="flex font-bold justify-evenly items-center">
                <p className="text-2xl">Quantity:</p>
                <button onClick={() => dispatch(decrementItemFromCart({productId: productId, price: price, quantity: 1}))} className="hover-effect bg-primaryButton w-10 h-10 text-white rounded m-2"> - </button>
                <p className="mx-2">{itemQuantity}</p>
                <button onClick={() => dispatch(addToCart({productId: productId, price: price, quantity: 1}))} className="hover-effect bg-primaryButton w-10 h-10 text-white rounded m-2"> + </button>
            </div>
            <div className="flex font-bold justify-evenly items-center">
                <p className="text-2xl">Total Price:</p>
                <p className="text-3xl mx-2">${price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Item;
