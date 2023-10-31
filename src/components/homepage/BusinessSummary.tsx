import React from 'react';
import CommonTitle from '../ui/CommonTitle'
import {
    RocketLaunchIcon,
    ShieldCheckIcon,
    HandThumbUpIcon,
    TruckIcon
  } from "@heroicons/react/24/outline"
const BusinessSummary = () => {
    const items = [{
        icon:RocketLaunchIcon,
        title: 'Fast Booking',
        text: 'You can book very fast with in some second'
    },{
        icon:ShieldCheckIcon,
        title: 'Verified Driver',
        text: 'All driver are verified driver waiting for you'
    },{
        icon: HandThumbUpIcon,
        title: 'Best Rate',
        text: 'You will find best and reasonable rate from us'
    },{
        icon: TruckIcon,
        title: 'Transport Safely',
        text: 'Our trusted driver will drop you with there safe hand'
    },]
    return (
        <div className='mt-4 container mx-auto p-10'>
            <CommonTitle title="Why Bahan Lagbe?" subText='Easiest way to book your vehicle'/>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 py-4'>

                {
                    items.map((item,index)=><div className='bg-white h-40 w-full flex flex-col justify-center items-center gap-2 shadow-xl rounded' key={index}>
                        <div className='p-2 rounded-full border border-accent shadow-lg'>
                        <item.icon  className='w-10 h-10 text-accent '/>
                        </div>
                        <h4 className='text-lg text-primary font-bold'>{item.title}</h4>
                        <h4 className='text-sm text-secondary px-10 text-center'>{item.text}</h4>
                    </div>)
                }
            </div>

            
        </div>
    );
};

export default BusinessSummary;