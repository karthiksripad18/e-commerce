import React from 'react';
// import LoadingOverlay from 'react-loading-overlay';

import LoginForm from '../components/LoginForm';
import fashionModel from "../assets/fashion-model.png";

const Login: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row justify-evenly items-center">
            <div className="hidden md:block hidden">
                <img src={fashionModel} alt="fashion-model" />
            </div>
            <LoginForm />
            
        </div>
    )
}

export default Login;
