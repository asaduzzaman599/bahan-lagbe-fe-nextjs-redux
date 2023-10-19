'use client'
import CommonTitle from '@/components/ui/CommonTitle'
import Vehicle from '@/components/ui/Vehicle'
import { useGetVehiclesQuery } from '@/redux/api/vehicles-api'
import { IVehicle, IVehicleQueryType } from '@/types'
import { useState } from 'react'

export default function VehiclePage () {
    const [search,setSearch] = useState('')
    const query: Partial<IVehicleQueryType> = {}
    query['status'] = 'AVAILABLE'
    query['search'] = search

    const {data:res} = useGetVehiclesQuery({...query})
    const data = res?.data
    return (
        <div>
                    <div className='container mx-auto'>
                        
                        <div className='text-center my-4 text-lg lg:text-3xl text-blue-gray-800'><CommonTitle>Available Vehicles</CommonTitle></div>
                        <div>
                            <input type='text' className='p-2 w-64 rounded border border-gry-300' placeholder='Search' /> 
                        </div>
                        <div className='grid lg:grid-cols-4 grid-cols-2 mt-4'>
                            {
                                data?.result.map((i: IVehicle)=><Vehicle vehicle={i} key={i.id} />)
                            }
                        </div>
                    </div>
        </div>
    );
};
