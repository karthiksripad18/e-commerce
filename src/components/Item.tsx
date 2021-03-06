import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart, decrementItemFromCart, deleteItemFromCart} from '../redux/cartSlice';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';

const initialAnimation = {
    x: -500
}

const finalAnimation = {
    x: 0, 
    transition: {
        duration: 1
    }
};

const Item = ({productId, imageUrl, itemQuantity, price}: {productId: number, imageUrl: string; itemQuantity: any, price: any}) => {
    const dispatch = useDispatch();

    return (
        <motion.div initial={initialAnimation} animate={finalAnimation} className="relative text-primary font-limelight mx-2 container rounded shadowed-2xl bg-white min-w-3/4 h-1/2 m-3 flex justify-evenly items-center">
            <div onClick={() => dispatch(deleteItemFromCart({productId: productId}))} className="absolute top-1 right-3 cursor-pointer"><FontAwesomeIcon icon={faTimes} color={"red"} /></div>
            <div className="w-1/3 flex justify-center items-center py-2">
                <img className="h-48 w-36" src={imageUrl} alt={productId.toString()} />
            </div>
            <div className="w-1/3 flex flex-col font-bold justify-evenly items-center">
                <p className="text-sm md:text-2xl">Quantity:</p>
                <div className="flex items-center mt-3">
                    <button onClick={() => dispatch(decrementItemFromCart({productId: productId, price: price, quantity: 1}))} className="hover-effect bg-primaryButton w-10 h-10 text-white rounded m-2"> - </button>
                    <p className="mx-2">{itemQuantity}</p>
                    <button onClick={() => dispatch(addToCart({productId: productId, price: price, quantity: 1}))} className="hover-effect bg-primaryButton w-10 h-10 text-white rounded m-2"> + </button>
                </div>
            </div>
            <div className="w-1/3 flex flex-col font-bold justify-evenly items-center">
                <p className="text-sm md:text-2xl">Total Price:</p>
                <p className="text-sm md:text-3xl mx-2 mt-3">${price.toFixed(2)}</p>
            </div>
        </motion.div>
    )
}

export default Item;
