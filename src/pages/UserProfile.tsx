import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setUserLogoutState} from '../redux/userSlice';
import {Redirect} from 'react-router-dom';

const UserProfile = () => {
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const dispatch = useDispatch();
    const logoutUser = () => {
        dispatch(setUserLogoutState());
        setRedirectToLogin(true);
    }

    if (redirectToLogin) return <Redirect to='/login' />
    return (
        <div className="w-full h-full flex justify-center items-center">
            <button className="bg-primaryButton p-2 rounded text-2xl" onClick={logoutUser}>Logout</button>
        </div>
    )
}

export default UserProfile;
