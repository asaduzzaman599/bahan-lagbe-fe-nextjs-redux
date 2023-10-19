'use client';
import Form from '@/components/form/Form'
import { useGetProfileQuery } from '@/redux/api/auth-api'
import { getUserInfo } from '@/services/auth.service'
import Link from 'next/link'
import React from 'react';

const Profile = () => {
    const { data:res }= useGetProfileQuery({})
    const data = res?.data
    const onSubmit = (inputData:any) =>{

    }
    return (
        <div>
           <p>Name: {data?.name}</p>
           <p>Role: {data?.role}</p>
           <p>Email: {data?.email}</p>
           <p>Contact No: {data?.contactNo}</p>
           <p>Address: {data?.Address ?? 'N/A'}</p>
           <div className='mt-4'>
                <Link href={'/profile/edit'} >
                   <button className='bg-gray-900 text-sm font-bold text-white rounded px-6 py-2'>Update Profile</button>
                </Link>
           </div>
        </div>
    );
};

export default Profile;