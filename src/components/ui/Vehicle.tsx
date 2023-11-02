'use client'
import defultImage from '@/assets/img/driving-cuate.png'
import { IVehicle } from '@/types'
import Image from 'next/image'
import Link from 'next/link'


export default function Vehicle ({vehicle}:{vehicle: IVehicle}) {
    return (
        <Link href={`/vehicles/${vehicle.id}`}  className='p-2 rounded shadow hover:shadow-lg cursor-pointer'>
            <Image src={vehicle?.imageUrl ?? defultImage} alt='Vehicle image' height={400} width={400} />
            <div className='py-2 text-center grid gap-2'>
                <div >
                    <p className='font-bold text-primary text-lg'>{vehicle.model}</p>
                    <p className='font-bold text-secondary text-sm'>{vehicle?.category?.title}</p>
                </div>
                <div className='grid grid-cols-1'>
                    <div>
                        <p className='font-light text-sm text-secondary'>Type</p>
                        <p className='font-semibold text-sm text-secondary'>{vehicle.type}</p>
                    </div>
                </div>
                <div>
                    <p className='font-light text-sm text-secondary'>Price</p>
                    <p className='font-bold text-accent text-2xl flex items-center justify-center gap-2'>{vehicle.price} <span className='text-xs text-secondary font-light'>(Per day)</span></p>
                    
                </div>
                <div>
                    <button className='py-2 px-4 bg-primary text-white hover:text-accent rounded-full'>Details</button>
                </div>
            </div>
        </Link>
 );
};
