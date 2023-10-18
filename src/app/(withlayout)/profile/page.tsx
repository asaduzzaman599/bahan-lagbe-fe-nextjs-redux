import Profile from '@/modules/Profile'
import React from 'react';

const ProfilePage = () => {
    return (
        <div className='w-4/5 mx-auto py-6 min-h-full flex flex-col justify-center items-center bg-white rounded'>
            <h3 className='p-4 text-lg font-semibold'>My Profile</h3>
            <Profile/>
        </div>
    );
};

export default ProfilePage;