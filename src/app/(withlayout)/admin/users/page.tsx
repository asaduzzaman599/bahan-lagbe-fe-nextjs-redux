'use client'
import { useGetUsersQuery } from '@/redux/api/users-api'
import React from 'react';

const UsersPage = () => {
    const {data: res} = useGetUsersQuery({}) 
    const data = res?.data
    console.log(data)
    return (
        <div>
            {data?.length}
        </div>
    );
};

export default UsersPage;