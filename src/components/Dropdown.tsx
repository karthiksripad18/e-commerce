import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';
import {selectCartItems} from '../redux/cartSlice';
import {useSelector} from 'react-redux';

interface Props {
    isOpen: boolean,
    toggle: Function
}

const Dropdown : React.FC<Props>= ({isOpen, toggle}) => {
    const {pathname} = useLocation();
    const { items }: any = useSelector(selectCartItems);
    return (
        <div onClick={() => toggle()} className={isOpen? "grid grid-rows-4 w-100 text-center text-2xl": 'hidden'}>
                <ul>
                    <li className={pathname === '/' ? "bg-white text-primary px-2 hover-effect shadowed-2xl border-2 rounded-full": "p-1 hover-effect"}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className={pathname === '/products' ? "bg-white text-primary px-2 hover-effect shadowed-2xl border-2 rounded-full": "p-1 hover-effect"}>
                        <Link to="/products">
                            Products
                        </Link>
                    </li>
                    <li className={pathname === '/cart' ? "bg-white text-primary px-2 hover-effect shadowed-2xl border-2 rounded-full relative": "p-1 hover-effect relative"}>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} color={pathname === '/cart'? "#2f303a" :"white"} />
                            {items.length > 0 ? <div className="px-1 font-sans text-xs font-bold rounded-full bg-primaryButton" style={{position: "absolute", top: 0, left: "50%"}}>{items.length}</div>: null}
                        </Link>
                    </li>
                    <li className={pathname === '/user' ? "bg-white text-primary px-2 hover-effect shadowed-2xl border-2 rounded-full": "p-1 hover-effect"}>
                        <Link to="/user">
                            <FontAwesomeIcon icon={faUser} color={pathname === '/user'? "#2f303a" :"white"} />
                        </Link>
                    </li>
                </ul>
            </div>
    )
}

export default Dropdown;
