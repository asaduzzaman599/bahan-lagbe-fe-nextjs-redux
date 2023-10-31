import React from 'react';
import CommonTitle from '../ui/CommonTitle'
import OverviewForm from './OverviewForm'

const Overview = () => {
    return (
        <div className='container mx-auto mt-10 p-10'>
           <div>
            <CommonTitle title='Customers Feedbacks' subText="Let us know what's on your mind" />
            <div className='mt-6 grid grid-cols-2 gap-4'>
                <div className='p-10 rounded-lg shadow-xl'>
                    <OverviewForm />
                </div>
                <div>

                </div>
            </div>
           </div>
           {/* <div className='mt-6 w-full text-center'>
           <Link href='/vehicles'>
           <button className='bg-light-900 text-primary border  border-accent py-2 px-6 rounded-full'>More</button>
           </Link>
           </div> */}
        </div>
    );
};

export default Overview;