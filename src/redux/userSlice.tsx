import { createSlice } from '@reduxjs/toolkit';
import {userState} from '../common/modals';

const initialState: userState = {
    userName: null,
    token: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName;
            state.token = action.payload.token;
        },
        setUserLogoutState: (state) => {
            state.userName = null;
            state.token = null;
        }
    }
});

export const { setActiveUser, setUserLogoutState } = userSlice.actions;
export const selectToken = ({user}: {user: userState}) => user.token;
export default userSlice.reducer;