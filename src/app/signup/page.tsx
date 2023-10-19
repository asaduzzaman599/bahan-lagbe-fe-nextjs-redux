"use client";
import logo from '@/assets/logo/logo.png'
import Signup from '@/modules/Signup'
import Image from 'next/image'
import loginImg from "@/assets/img/login.png"
import Link from 'next/link'


const SignUpPage = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 w-screen min-h-screen'>
            <div className='hidden w-full h-full lg:flex item-center justify-center'>
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
                    <Signup />
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;