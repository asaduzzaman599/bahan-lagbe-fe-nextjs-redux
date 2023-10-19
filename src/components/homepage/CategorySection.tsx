import { getBaseUrl } from '@/helpers/config/envConfig'
import { ICategory, IVehicle } from '@/types'
import React from 'react';
import Link from 'next/link'
import Category from '../ui/Category'

const CategoriesSection =  async () => {
    const res = await fetch(`${getBaseUrl()}/categories`, {
        next: { revalidate: 10 },
        })
    const {data} = await res.json()
    return (
        <div className='container mx-auto mt-4'>
           <div>
            <h3 className="text-lg lg:text-2xl font-extrabold text-blue-gray-800 text-center">
            Categories
            </h3>
            <div className='mt-6 grid grid-cols-1 lg grid-cols-3'>
                {
                    data?.slice(0,3)?.map((i:ICategory)=><Category category={i} key={i.id}></Category>)
                }
            </div>
           </div>
           <div className='mt-6 w-full text-center'>
           <Link href='/categories'>
           <button className='bg-blue-900 text-white py-2 px-6 rounded-full'>More</button>
           </Link>
           </div>
        </div>
    );
};

export default CategoriesSection;