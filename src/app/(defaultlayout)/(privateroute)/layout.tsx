"use client"
import { USER_ROLE } from '@/constants/role'
import { getUserInfo } from '@/services/auth.service'
import { useRouter } from 'next/navigation'
import React from 'react';

const AdminLayout = ({children}:{children: React.ReactNode}) => {
    const currentUser = getUserInfo()
    const router = useRouter()
    if(!currentUser)router.push('/login')
    
    return (
        children
    );
};

export default AdminLayout;