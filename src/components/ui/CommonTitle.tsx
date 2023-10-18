import React, { ReactNode } from 'react';

const CommonTitle = ({children}:{children: ReactNode}) => {
    return (
            <h3 className='text-lg font-semibold text-gray-800'>{children}</h3>
    );
};

export default CommonTitle;