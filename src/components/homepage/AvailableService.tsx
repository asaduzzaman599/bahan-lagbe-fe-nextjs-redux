import { getBaseUrl } from '@/helpers/config/envConfig'
import { IVehicle } from '@/types'
import React from 'react';
import Vehicle from '../ui/Vehicle'
import Link from 'next/link'

const AvailableService =  async () => {
    const res = await fetch(`${getBaseUrl()}/vehicles?size=6`, {
        next: { revalidate: 10 },
        })
    const {data} = await res.json()
    return (
        <div className='container mx-auto'>
           <div>
            <h3 className="text-lg lg:text-xl font-semibold text-blue-gray-800 text-center">
            Available Service
            </h3>
            <div className='mt-6 grid grid-cols-1 lg grid-cols-3'>
                {
                    data?.result?.map((i:IVehicle)=><Vehicle vehicle={i} key={i.id}></Vehicle>)
                }
            </div>
           </div>
           <div className='mt-6 w-full text-center'>
           <Link href='/vehicles'>
           <button className='bg-blue-900 text-white py-2 px-6 rounded-full'>More</button>
           </Link>
           </div>
        </div>
    );
};

export default AvailableService;