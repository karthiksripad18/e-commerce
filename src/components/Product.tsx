import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import Modal from 'react-modal';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Product = ({ id, title, price, category, description, image }: { id: number, title: string, price: string, category: string, description: string, image: string}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className="text-primary font-sans container shadowed-2xl rounded bg-white h-auto flex  items-center justify-evenly">
            <div className="ml-2">
                <img className="cursor-pointer" onClick={() => setModalIsOpen(true)} width="193" height="130" src={image} alt={title}/>
            </div>
            <div className="ml-5 mr-2 h-full flex flex-col justify-evenly items-center">
                <p className="mb-2 font-bold">Category: {category}</p>
                <p className="font-bold text-5xl mt-2">${price}</p>
                <button onClick={() => dispatch(addToCart({productId: id, price: price, imageUrl: image }))} className="hover-effect bg-primaryButton w-20 rounded text-white font-bold">Add To Cart</button>
            </div>
            <Modal isOpen={modalIsOpen}>
                <div className="flex flex-col relative">
                    <div onClick={() =>setModalIsOpen(false)} className="absolute top-1 right-3 cursor-pointer">
                        <FontAwesomeIcon icon={faTimes} color={"red"} />
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
