"use client";
import logo from '@/assets/logo/logo.png'
import Signup from '@/modules/Signup'
import Image from 'next/image'


const SignUpPage = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 w-screen min-h-screen'>
            <div className='w-full h-full'>
                image
            </div>
            <div className='h-full flex flex-col'>
                <div className='w-20 h-20 p-4'> 
                <Image
                    className="w-[280px] mx-auto rounded"
                    src={logo}
                    alt="heroImage"
                    width={280}
                    height={200}
                    />
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <Signup />
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;