import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUser, faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC<{toggle: Function}> = ({toggle}) => {
    const {pathname} = useLocation();
    return (
        <nav className="border-b border-white p-3 flex justify-between items-center min-w-full">
            <div className="ml-5 test-effect hover-effect">
                <Link to="/" className="text-4xl text-bold">Mirror</Link>
            </div>
            <div onClick={() => toggle()} className="cursor-pointer lg:hidden">
                <FontAwesomeIcon icon={faBars} color="white" />
            </div>
            <div className="w-1/4 text-2xl lg:block hidden">
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
                    <li className={pathname === '/cart' ? "bg-white px-2 hover-effect border-2 rounded-full": "px-1 hover-effect"}>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} color={pathname === '/cart'? "#2f303a" :"white"} />
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
