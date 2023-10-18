import Profile from '@/modules/Profile'
import React from 'react';

const ProfilePage = () => {
    return (
        <div className='w-full min-h-full flex justify-center items-center bg-white '>
            <h3 className='p-4 text-lg font-semibold'>My Profile</h3>
            <Profile/>
        </div>
    );
};

export default ProfilePage;