'use client'
import defultImage from '@/assets/img/driving-cuate.png'
import { IVehicle } from '@/types'
import Image from 'next/image'

export default function Vehicle ({vehicle}:{vehicle: IVehicle}) {
    return (
        <div className='p-4 rounded shadow'>
            <Image src={vehicle?.imageUrl ?? defultImage} alt='Vehicle image' height={400} width={400} />
            <div className='py-2 text-center grid gap-2'>
                <div >
                    <p className='font-semibold text-gray-700 text-sm'>Model</p>
                    <p className='font-bold text-blue-gray-900 text-lg'>{vehicle.model}</p>
                </div>
                <div className='grid grid-cols-2'>
                    <div>
                        <p className='font-semibold text-sm text-gray-700'>Type</p>
                        <p className='font-semibold text-sm text-blue-gray-700'>{vehicle.type}</p>
                    </div>
                    <div>
                        <p className='font-semibold text-sm text-gray-700'>Category</p>
                        <p className='font-bold text-blue-gray-700 text-sm'>{vehicle?.category?.title}</p>
                    </div>
                </div>
                <div>
                    <p className='font-semibold text-sm text-gray-700'>Price</p>
                    <p className='font-bold text-blue-gray-700 text-sm'>{vehicle.price} <span className='text-xs text-light'>(Per day)</span></p>
                    
                </div>
                <div>
                    <button className='py-2 px-4 bg-blue-gray-700 text-white rounded'>Add to Cart</button>
                </div>
            </div>
        </div>
 );
};
