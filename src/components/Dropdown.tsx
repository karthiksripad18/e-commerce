import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';

interface Props {
    isOpen: boolean,
    toggle: Function
}

const Dropdown : React.FC<Props>= ({isOpen, toggle}) => {
    return (
        <div onClick={() => toggle()} className={isOpen? "grid grid-rows-4 w-100 text-center text-2xl": 'hidden'}>
                <ul>
                    <li className="p-1">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="p-1">
                        <Link to="/">
                            Products
                        </Link>
                    </li>
                    <li className="p-1">
                        <Link to="/">
                            <FontAwesomeIcon icon={faShoppingCart} color="white" />
                        </Link>
                    </li>
                    <li className="p-1">
                        <Link to="/">
                            <FontAwesomeIcon icon={faUser} color="white" />
                        </Link>
                    </li>
                </ul>
            </div>
    )
}

export default Dropdown;
