import Footer from '@/components/homepage/Footer'
import React from 'react';

const CommonLayout = ({children}: {
    children: React.ReactNode 
}) => {
    return (
        <div>
            Navbar
            {children}
            <Footer />
        </div>
    );
};

export default CommonLayout;