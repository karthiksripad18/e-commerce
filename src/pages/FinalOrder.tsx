import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {clearCart} from '../redux/cartSlice';

const FinalOrder = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("her")
        dispatch(clearCart());
    });
    return (
        <div className="w-screen h-full flex flex-col font-sans text-4xl justify-center items-center">
            <p>Congrats on your Purchase!!!</p>
            <p>As you know already, your orders will never be delivered to you.</p>
        </div>
    )
}

export default FinalOrder;
