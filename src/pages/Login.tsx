import React from 'react';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row justify-evenly items-center">
            <p className="text-9xl hidden lg:block hidden"><span className="bg-white rounded-full text-primary p-9">M</span>irror</p>
            <LoginForm />
            
        </div>
    )
}

export default Login;
