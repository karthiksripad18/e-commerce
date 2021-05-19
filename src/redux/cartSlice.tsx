import { createSlice } from '@reduxjs/toolkit';

interface productInCart {
    productId: number;
    quantity: number;
    totalPrice: number;
}

const initialState: {
    items: productInCart[]
} = {
    items : []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart : ({items}, {payload}: any) => {
            console.log(payload);
            const productObj = items.find((product: productInCart) => product.productId === payload.productId)
            if (productObj) {
                console.log(productObj);
            } else {
                console.log("####");
                items = [...items, {productId: payload.productId, quantity: 1, totalPrice: payload.price}];
                console.log(items);
            }
        },
    }
});

export const { addToCart } = cartSlice.actions;
export const selectCartItems = ({cart}: {cart: productInCart[]}) => cart;
export default cartSlice.reducer;