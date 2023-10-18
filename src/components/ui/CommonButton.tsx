import React from 'react';

const CommonButton = ({children}:{children: React.ReactNode}) => {
    return (
        <button className='bg-gray-900 text-sm font-bold text-white rounded px-6 py-2'>{children}</button>
    );
};

export default CommonButton;