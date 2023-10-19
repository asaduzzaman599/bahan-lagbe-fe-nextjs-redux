'use client'

import Category from '@/components/ui/Category'
import Vehicle from '@/components/ui/Vehicle'
import { useGetCategoriesQuery, useGetCategoryQuery } from '@/redux/api/categories-api'
import { useGetVehiclesByCategoriesQuery } from '@/redux/api/vehicles-api'
import { ICategory, IVehicle } from '@/types'
import Link from 'next/link'
type IDParams = {
    params: any
}
const CategoryPage = ({params}:IDParams ) => {
    const {id} = params
    const {data:categoryRes} = useGetCategoryQuery(id)
    const {data:vehiclesRes} = useGetVehiclesByCategoriesQuery({id:id})
    const categoryData = categoryRes?.data
    const vehicleData = vehiclesRes?.data
    return (
        <div className='container mx-auto my-6'>
            <h3 className='text-center text-xl font-bold text-blue-gray-800'>Vehicle of {categoryData?.title} Categories</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 '>
            {
                 vehicleData?.result?.map((c:IVehicle)=>
                    <Link href={'/'} key={c.id}>
                        <Vehicle  vehicle={c}/>
                    </Link>
               ) 
            }</div>
        </div>
    );
};

export default CategoryPage;