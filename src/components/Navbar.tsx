import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUser, faBars} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
import {selectCartItems} from '../redux/cartSlice';
import {useSelector} from 'react-redux';

const flipAnimation = {
    rotateY: 180, 
    transition: { 
        yoyo: 3, 
        duration: 2,
        delay: 1
    }
};

const Navbar: React.FC<{toggle: Function}> = ({toggle}) => {
    const {pathname} = useLocation();
    const { items }: any = useSelector(selectCartItems);
    return (
        <nav className="flex items-center justify-between min-w-full p-3 border-b border-white">
            <div className="ml-5 test-effect hover-effect">
                <Link to="/" className="flex text-4xl text-bold">
                    <motion.p animate={flipAnimation} className="p-1 bg-white rounded-full text-primary">M</motion.p>irror
                </Link>
            </div>
            <div onClick={() => toggle()} className="cursor-pointer lg:hidden">
                <FontAwesomeIcon icon={faBars} color="white" />
            </div>
            <div className="hidden w-1/4 text-2xl lg:block">
                <ul className="flex justify-evenly">
                    <li className={pathname === '/' ? "bg-white text-primary px-2 hover-effect shadowed-2xl border-2 rounded-full": "px-1 hover-effect"}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className={pathname === '/products' ? "bg-white text-primary px-2 hover-effect border-2 rounded-full": "px-1 hover-effect"}>
                        <Link to="/products">
                            Products
                        </Link>
                    </li>
                    <li className={pathname === '/cart' ? "bg-white px-2 hover-effect border-2 rounded-full relative": "px-1 hover-effect relative"}>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} color={pathname === '/cart'? "#2f303a" :"white"} />
                            {items.length > 0? <div className="absolute top-0 right-0 px-1 text-xs font-bold rounded-full bg-primaryButton">{items.length}</div>:null}
                        </Link>
                    </li>
                    <li className={pathname === '/user' ? "bg-white px-2 hover-effect bg-white text-black border-2 rounded-full": "px-1 hover-effect"}>
                        <Link to="/user">
                            <FontAwesomeIcon icon={faUser} color={pathname === '/user'? "#2f303a" :"white"} />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
