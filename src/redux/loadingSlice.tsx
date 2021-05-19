import { createSlice } from '@reduxjs/toolkit';

interface loadingState {
    isLoading: boolean;
    loadingMessage: string | null;
}

const initialState: loadingState = {
    isLoading: false,
    loadingMessage: null
}

const loaderSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload.isLoading;
            state.loadingMessage = action.payload.loadingMessage;
        }
    }
});

export const { setLoading } = loaderSlice.actions;
export const selectLoadingState = ({loader} : {loader: loadingState}) => loader;
export default loaderSlice.reducer;