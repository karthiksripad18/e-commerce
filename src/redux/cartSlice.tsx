import { createSlice } from '@reduxjs/toolkit';

interface productInCart {
    productId: number;
    quantity: number;
    actualPrice: number;
    totalPrice: number;
    imageUrl: string;
}

const initialState: {
    items: productInCart[],
    grandTotal: number
} = {
    items : [],
    grandTotal: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart : (state, {payload}: any) => {
            let productObj = state.items.find((product: productInCart) => product.productId === payload.productId)
            if (productObj) {
               state.items.forEach(
                   item => {
                       if (item.productId === payload.productId) {
                           item.quantity = item.quantity + 1;
                           item.totalPrice = item.totalPrice + item.actualPrice;
                           state.grandTotal = state.grandTotal + item.actualPrice;
                       }
                   }
               )
            } else {
                state.items.push({productId: payload.productId, quantity: 1, actualPrice: payload.price, totalPrice: payload.price, imageUrl: payload.imageUrl});
                state.grandTotal = state.grandTotal + payload.price;
            }
        },
        decrementItemFromCart: (state, {payload}: any) => {
            let i = 0;
            function removeFromList (i: any) {
                state.items.splice(i, 1);
            }
            while(i < state.items.length) {
                if (state.items[i].productId === payload.productId) {
                    if (state.items[i].quantity > 1) {
                        state.items[i].quantity -= 1;
                        state.items[i].totalPrice -= state.items[i].actualPrice;
                        state.grandTotal = state.grandTotal - state.items[i].actualPrice;
                    } else {
                        state.grandTotal = state.grandTotal - state.items[i].actualPrice;
                        removeFromList(i);
                    }
                    break;
                }
                i++;
            }
        },
        deleteItemFromCart: (state, {payload}: any) => {
            let i = 0;
            function removeFromList (i: any) {
                state.items.splice(i, 1);
            }
            while(i < state.items.length) {
                if (state.items[i].productId === payload.productId) {
                    state.grandTotal -= state.items[i].totalPrice;
                    removeFromList(i);
                    break;
                }
                i++;
            }
        }
    }
});

export const { addToCart, decrementItemFromCart, deleteItemFromCart } = cartSlice.actions;
export const selectCartItems = ({cart}: {cart: productInCart[]}) => cart;
export default cartSlice.reducer;