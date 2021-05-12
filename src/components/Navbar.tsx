import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUser, faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({toggle} : {toggle: Function}) => {
    return (
        <nav className="border-b border-white p-3 flex justify-between items-center min-w-full">
            <div>
                <Link to="/" className="text-4xl text-bold">Mirror</Link>
            </div>
            <div onClick={() => toggle()} className="cursor-pointer md:hidden">
                <FontAwesomeIcon icon={faBars} color="white" />
            </div>
            <div className="w-1/4 text-2xl md:block hidden">
                <ul className="flex justify-evenly">
                    <li className="px-1">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-1">
                        <Link to="/">
                            Products
                        </Link>
                    </li>
                    <li className="px-1">
                        <Link to="/">
                            <FontAwesomeIcon icon={faShoppingCart} color="white" />
                        </Link>
                    </li>
                    <li className="px-1">
                        <Link to="/">
                            <FontAwesomeIcon icon={faUser} color="white" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
