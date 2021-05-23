import { createSlice } from '@reduxjs/toolkit';

interface productInCart {
    productId: number;
    quantity: number;
    actualPrice: number;
    totalPrice: number;
    imageUrl: string;
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
        addToCart : (state, {payload}: any) => {
            console.log("###", state.items);
            let productObj = state.items.find((product: productInCart) => product.productId === payload.productId)
            if (productObj) {
               state.items.forEach(
                   item => {
                       if (item.productId === payload.productId) {
                           item.quantity = item.quantity + 1;
                           item.totalPrice = item.totalPrice + item.actualPrice;
                       }
                   }
               )
            } else {
                state.items.push({productId: payload.productId, quantity: 1, actualPrice: payload.price, totalPrice: payload.price, imageUrl: payload.imageUrl});
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
                    } else {
                        removeFromList(i);
                    }
                    break;
                }
                i++;
            }
        }
    }
});

export const { addToCart, decrementItemFromCart } = cartSlice.actions;
export const selectCartItems = ({cart}: {cart: productInCart[]}) => cart;
export default cartSlice.reducer;