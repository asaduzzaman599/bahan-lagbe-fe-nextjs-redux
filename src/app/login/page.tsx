import Login from '@/pages/Login'
import React from 'react';

const LoginPage = () => {
    
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 w-screen min-h-screen'>
            <div className='w-full h-full'>
                image
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <Login />
            </div>
        </div>
    );
};

export default LoginPage;