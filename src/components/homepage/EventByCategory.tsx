import { getBaseUrl } from '@/helpers/config/envConfig'
import { IVehicle } from '@/types'
import React from 'react';
import Vehicle from '../ui/Vehicle'
import Link from 'next/link'
import CommonTitle from '../ui/CommonTitle'

const EventByCategory =  async () => {
    const res = await fetch(`${getBaseUrl()}/vehicles?size=100`, {
        next: { revalidate: 10 },
        })
    const {data} = await res.json()
    const vehicles: IVehicle[] = []
       data?.result?.map((i:IVehicle)=>{
            if(!vehicles?.map((i:IVehicle)=>i?.categoryId).includes(i.categoryId))
            vehicles.push(i)
       })
    return (
        <div className='container mx-auto mt-10 p-10'>
           <div>
            <CommonTitle title='Vehicle By Category' subText='You can easily find category based vehicle here' />
            <div className='mt-6 grid grid-cols-2 lg:grid-cols-5 gap-4'>
                {
                    vehicles?.slice(0,3)?.map((i:IVehicle)=><Vehicle vehicle={i} key={i.id}></Vehicle>)
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

export default EventByCategory;