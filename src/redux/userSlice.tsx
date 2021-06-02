import { createSlice } from '@reduxjs/toolkit';
import {userState} from '../common/modals';

const initialState: userState = {
    userName: null,
    password: null,
    token: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName;
            state.password = action.payload.password;
            state.token = action.payload.token;
            sessionStorage.setItem('username', action.payload.userName);
            sessionStorage.setItem('token', action.payload.token);
        },
        setUserLogoutState: (state) => {
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('token');
            state.userName = null;
            state.password = null;
            state.token = null;
        }
    }
});

export const { setActiveUser, setUserLogoutState } = userSlice.actions;
export const selectToken = ({user}: {user: userState}) => user.token;
export default userSlice.reducer;