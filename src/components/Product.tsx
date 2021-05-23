import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import Modal from 'react-modal';

const Product = ({ id, title, price, category, description, image }: { id: number, title: string, price: string, category: string, description: string, image: string}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className="text-primary font-sans container shadowed-2xl rounded bg-white min-h-100px flex  items-center justify-evenly">
            <div className="ml-2">
                <img className="cursor-pointer" onClick={() => setModalIsOpen(true)} width="193" height="130" src={image} alt={title}/>
            </div>
            <div className="ml-5 mr-2 h-full flex flex-col justify-evenly items-center">
                <p className="mb-2 font-bold">Category: {category}</p>
                <p className="font-bold text-5xl mt-2">${price}</p>
                <button onClick={() => dispatch(addToCart({productId: id, price: price, imageUrl: image }))} className="hover-effect bg-primaryButton w-20 rounded text-white font-bold">Add To Cart</button>
            </div>
            <Modal isOpen={modalIsOpen}>
                <div className="flex flex-col">
                    <div className="w-full h-1/4 flex flex-row-reverse">
                        <button className="font-bold text-white bg-primary rounded p-2" onClick={() =>setModalIsOpen(false)}>X</button>
                    </div>
                    <div className="w-full h-3/4 flex justify-evenly items-center">
                        <div>
                            <img width="400" height="400" src={image} alt="" />
                        </div>
                        <div className="h-full w-1/2 ml-2">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Product;
