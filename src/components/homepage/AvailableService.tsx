import { getBaseUrl } from '@/helpers/config/envConfig'
import { IVehicle } from '@/types'
import React from 'react';
import Vehicle from '../ui/Vehicle'
import Link from 'next/link'
import CommonTitle from '../ui/CommonTitle'

const AvailableService =  async () => {
    const res = await fetch(`${getBaseUrl()}/vehicles?size=6`, {
        next: { revalidate: 10 },
        })
    const {data} = await res.json()
    return (
        <div className='container mx-auto  p-10'>
           <div>
            <CommonTitle title='Available Vehicle' subText='Booking your desired vehicle'/>
            <div className='my-4 grid grid-cols-2 lg:grid-cols-5 gap-4'>
                {
                    data?.result?.map((i:IVehicle)=><Vehicle vehicle={i} key={i.id}></Vehicle>)
                }
            </div>
           </div>
           <div className='mt-6 w-full text-center'>
           <Link href='/vehicles'>
           <button className='bg-light-900 text-primary border  border-accent py-2 px-6 rounded-full'>More</button>
           </Link>
           </div>
        </div>
    );
};

export default AvailableService;