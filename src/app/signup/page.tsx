import Signup from '@/pages/Signup'
import React from 'react';

const SignUpPage = () => {
    return (
        <div className='gird lg:grid-cols-2 grid-cols-1 w-screen min-h-screen'>
            <div className='w-full h-full'>
                image
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <Signup />
            </div>
        </div>
    );
};

export default SignUpPage;