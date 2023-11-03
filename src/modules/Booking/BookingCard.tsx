import { IBooking } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import defultImage from '@/assets/img/driving-cuate.png'
import {format} from 'date-fns'

const BookingCard = ({booking}:{booking: IBooking}) => {
    return (
        <Link href={`/booking/${booking.id}`}  className='p-2 rounded shadow hover:shadow-lg cursor-pointer'>
            <Image src={booking?.vehicle?.imageUrl ?? defultImage} alt='Vehicle image' height={400} width={400} />
            <div className='py-2 text-center grid gap-2'>
                <div >
                    <p className='font-bold text-primary text-lg'>{booking.vehicle.model}</p>
                    <p className='font-bold text-secondary text-sm'>{booking.vehicle?.category?.title}</p>
                </div>
                <div className='grid grid-cols-1'>
                    <div>
                        <p className='font-light text-sm text-secondary'>From</p>
                        <p className='font-semibold text-sm text-secondary'>{format(new Date(booking.startTime), 'dd/MM/yyyy')}</p>
                    </div>
                    <div>
                        <p className='font-light text-sm text-secondary mt-2'>To</p>
                        <p className='font-semibold text-sm text-secondary'>{format(new Date(booking.endTime), 'dd/MM/yyyy')}</p>
                    </div>
                </div>
                <div>
                    <p className='font-light text-sm text-secondary '>total cost</p>
                    <p className='font-bold text-accent text-2xl flex items-center justify-center gap-2'>{booking.total}</p>
                    <p className='font-light text-sm text-secondary mt-2'>Status</p>
                    <p className='font-bold text-accent text-lg flex items-center justify-center gap-2'>{booking.status}</p>
                </div>
                <div>
                    <button className='py-2 px-4 bg-primary text-white hover:text-accent rounded-full'>Details</button>
                </div>
            </div>
        </Link>
    );
};

export default BookingCard;