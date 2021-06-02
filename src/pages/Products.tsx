import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoading} from '../redux/loadingSlice';
import {FAKEAPIURL, ALL,MENS, WOMENS, JEWELLERY, ELECTRONICS } from '../common/constants';
import Product from '../components/Product';

const Products: React.FC = () => {
    const dispatch = useDispatch();
    const [selectedCategory, SetSelectedCategory] = useState(ALL);
    const [products, SetProducts] = useState([]);

    useEffect(() => {
        dispatch(setLoading({isLoading: true, loadingMessage: "Fetching your Products"}));
        const getProducts = () => {
            const url = selectedCategory? `${FAKEAPIURL}products/category/${selectedCategory}`: `${FAKEAPIURL}products`;
            axios.get(url)
            .then(
                ({data}) => {
                    dispatch(setLoading({isLoading: false, loadingMessage: null}));
                    SetProducts(data);
                }
            )
        };
        getProducts();
    }, [selectedCategory, dispatch]);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full flex flex-col items-center sm:flex-row mb-5">
                <div onClick={() => SetSelectedCategory(ALL)} className={selectedCategory === ALL? "underline category": "category"}>All</div>
                <div onClick={() => SetSelectedCategory(MENS)} className={selectedCategory === MENS? "underline category": "category"}>Men's</div>
                <div onClick={() => SetSelectedCategory(WOMENS)} className={selectedCategory === WOMENS? "underline category": "category"}>Women's</div>
                <div onClick={() => SetSelectedCategory(JEWELLERY)} className={selectedCategory === JEWELLERY? "underline category": "category"}>Jewellery</div>
                <div onClick={() => SetSelectedCategory(ELECTRONICS)} className={selectedCategory === ELECTRONICS? "underline category": "category"}>Electronics</div>
            </div>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
                {products.length > 0?
                    products.map((product,i) => <Product {...product} key={i} />)
                    : null
                }
            </div>
        </div>
    )
}

export default Products;
