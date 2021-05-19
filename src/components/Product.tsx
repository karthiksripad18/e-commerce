import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/cartSlice';

const Product = ({ id, title, price, category, description, image }: { id: number, title: string, price: string, category: string, description: string, image: string }) => {
    const dispatch = useDispatch();
    return (
        <div className="text-primary font-sans container shadowed-2xl rounded bg-white min-h-100px flex  items-center justify-evenly">
            <div className="ml-2">
                <img className="cursor-pointer" width="193" height="130" src={image} alt={title}/>
                <p className="font-bold text-5xl mt-2">${price}</p>
            </div>
            <div className="ml-5 mr-2 flex flex-col justify-center items-center">
                <p className="mb-2 font-bold">Category: {category}</p>
                <p>{description}</p>
                <button onClick={() => dispatch(addToCart({productId: id, price: price }))} className="bg-primaryButton w-20 rounded text-white font-bold mt-2 mb-1">Add To Cart</button>
            </div>
        </div>
    )
}

export default Product;
