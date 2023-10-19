"use client";
import logo from '@/assets/logo/logo.png'
import Login from '@/modules/Login'
import Image from 'next/image'

import loginImg from "@/assets/img/login.png"
import Link from 'next/link'

const LoginPage = () => {
    
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 w-screen min-h-screen'>
            <div className='hidden lg:flex h-full  item-center justify-center'>
            <Image src={loginImg} alt='logo image' style={{width: '80%',height:'auto'}} />
            </div>
            <div className='h-full flex flex-col'>
            <Link href='/'>
                <div className='w-40 h-40 p-4'> 
                <Image
                    className="w-[280px] mx-auto rounded"
                    src={logo}
                    alt="heroImage"
                    width={280}
                    height={200}
                    />
                </div>
                </Link>
                <div className='w-full h-full flex justify-center items-center'>
                    <Login />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;