import React from 'react';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
    return (
        <div className="bg-login-background bg-cover w-full h-full flex flex-col md:flex-row justify-evenly items-center">
            <LoginForm />
            
        </div>
    )
}

export default Login;
