import React from 'react';
import CommonTitle from '../ui/CommonTitle'
import Link from 'next/link'

const UpcomingService = () => {
    const items = [
        {title: 'Ride Sharing', text:'Matches passengers with drivers of vehicles for hire'},
        {title: 'Buy & Sale', text:'Buy and sale your Desire vehicle with us'},
        {title: 'Emergency', text:'We will add vehicle for used on your emergency situations'},
        {title: 'Pick and Drop', text:'will pick you and drop your school/office'},
    ]
    return (
        <div className='container mx-auto p-10'>
            <CommonTitle title='Upcoming Services' subText="Stay with us new service are coming" />
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
            {
                items.map((item,index)=><Link key={index}  href='/categories' className='h-full'>
                    <div className='text-center p-4 shadow-lg border border-accent rounded-lg cursor-pointer hover:shadow-xl h-full'>
                    <h4 className='text-primary text-lg font-semibold'>{item.title}</h4>
                    <p className='text-secondary text-sm'>{item.text}</p>
                </div>
                </Link>)
            }
        </div>
        <div className='mt-6 w-full text-center'>
           <Link href='/categories'>
           <button className='bg-light-900 text-primary border  border-accent py-2 px-6 rounded-full'>More</button>
           </Link>
           </div>
        </div>
    );
};

export default UpcomingService;