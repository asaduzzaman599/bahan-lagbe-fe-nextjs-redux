import { getBaseUrl } from '@/helpers/config/envConfig'
import { ICategory, IVehicle } from '@/types'
import React from 'react';
import Link from 'next/link'
import Category from '../ui/Category'
import CommonTitle from '../ui/CommonTitle'

const CategoriesSection =  async () => {
    const res = await fetch(`${getBaseUrl()}/categories`, {
        next: { revalidate: 10 },
        })
    const {data} = await res.json()
    return (
        <div className='container mx-auto mt-4  p-10'>
           <div>
            <CommonTitle title='Categories' subText='find your vehicle from category' />
            <div className='my-4 grid grid-cols-3 lg:grid-cols-6 gap-4'>
                {
                    data?.slice(0,3)?.map((i:ICategory)=><Category category={i} key={i.id}></Category>)
                }
            </div>
           </div>
           <div className='mt-6 w-full text-center'>
           <Link href='/categories'>
           <button className='bg-light-900 text-primary border  border-accent py-2 px-6 rounded-full'>More</button>
           </Link>
           </div>
        </div>
    );
};

export default CategoriesSection;