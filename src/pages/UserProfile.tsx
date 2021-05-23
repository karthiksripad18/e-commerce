import React from 'react';
import {useDispatch} from 'react-redux';
import {setUserLogoutState} from '../redux/userSlice';

const UserProfile = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(setUserLogoutState())}>Logout</button>
        </div>
    )
}

export default UserProfile;
