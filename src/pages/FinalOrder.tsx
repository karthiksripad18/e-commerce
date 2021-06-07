import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {clearCart} from '../redux/cartSlice';

const FinalOrder = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearCart());
    });
    return (
        <div className="w-full h-full flex flex-col font-limelight text-xl md:text-4xl justify-center items-center">
            <p>Congrats on your Purchase!!!</p>
            <p className="mt-5 text-center">As you know already, your orders will never be delivered to you.</p>
        </div>
    )
}

export default FinalOrder;
