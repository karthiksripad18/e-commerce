import { createSlice } from '@reduxjs/toolkit';
import {userState} from '../common/modals';

const initialState: userState = {
    userName: null,
    userEmail: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
            sessionStorage.setItem('userName', action.payload.userName);
        },
        setUserLogoutState: (state) => {
            sessionStorage.removeItem('userName');
            state.userName = null;
            state.userEmail = null;
        }
    }
});

export const { setActiveUser, setUserLogoutState } = userSlice.actions;
export default userSlice.reducer;