'use client';
import Form from '@/components/form/Form'
import { useGetProfileQuery } from '@/redux/api/auth-api'
import { getUserInfo } from '@/services/auth.service'
import React from 'react';

const Profile = () => {
    const { data }= useGetProfileQuery({})
    console.log('data',data)
    const onSubmit = (data:any) =>{

    }
    return (
        <div>
            <Form submitHandler={onSubmit}></Form>
        </div>
    );
};

export default Profile;