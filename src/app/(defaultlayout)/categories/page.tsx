'use client'

import Category from '@/components/ui/Category'
import { useGetCategoriesQuery } from '@/redux/api/categories-api'
import { ICategory } from '@/types'
import Link from 'next/link'

const CategoriesPage = () => {
    const {data:res} = useGetCategoriesQuery({})
    const data = res?.data
    return (
        <div className='container mx-auto my-6'>
            <h3 className='text-center text-xl font-bold text-blue-gray-800'>Categories</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 '>
            {
                data?.map((c:ICategory)=><Link href={`/categories/${c.id}`} key={c.id}>
                    <Category  category={c}/>
                </Link>)
            }</div>
        </div>
    );
};

export default CategoriesPage;