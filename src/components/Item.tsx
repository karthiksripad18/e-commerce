import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/cartSlice';

const Item = ({productId, imageUrl, itemQuantity, price}: {productId: number, imageUrl: string; itemQuantity: any, price: any}) => {
    const dispatch = useDispatch();

    return (
        <div className="text-primary font-sans flex justify-evenly container rounded shadowed-2xl bg-white min-w-fill min-h-100px m-3">
            <div className="my-2">
                <img src={imageUrl} alt="" width="150" height="150" />
            </div>
            <div className="flex font-bold justify-evenly items-center">
                <p className="text-2xl">Quantity:</p>
                <button className="hover-effect bg-primaryButton w-10 h-10 text-white rounded m-2"> - </button>
                <p className="mx-2">{itemQuantity}</p>
                <button onClick={() => dispatch(addToCart({productId: productId, price: price, quantity: 1}))} className="hover-effect bg-primaryButton w-10 h-10 text-white rounded m-2"> + </button>
            </div>
            <div className="flex font-bold justify-evenly items-center">
                <p className="text-2xl">Total Price:</p>
                <p className="text-3xl mx-2">${price}</p>
            </div>
        </div>
    )
}

export default Item;
