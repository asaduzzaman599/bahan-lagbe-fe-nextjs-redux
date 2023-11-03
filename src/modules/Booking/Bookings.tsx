'use client'
import Loading from '@/components/ui/Loading'
import { useGetBookingsQuery } from '@/redux/api/booking.api'
import React from 'react';
import BookingCard from './BookingCard'
import { IBooking } from '@/types'
import CommonTitle from '@/components/ui/CommonTitle'
import { getUserInfo } from '@/services/auth.service'
import { useRouter } from 'next/navigation'
import { USER_ROLE } from '@/constants/role'

const Bookings = () => {
    const router = useRouter()
    const currentUser = getUserInfo()

    const {data: resData, isLoading} = useGetBookingsQuery({})
    if(isLoading) return <Loading />
    if(currentUser && currentUser.role !== USER_ROLE.CUSTOMER) router.push('/admin/manage-booking')

    const data = resData.data
    return (
        <div className='container mx-auto px-10 my-4'>
            <CommonTitle title='Booked by you'/>

            <div className='grid grid-cols-2 lg:grid-cols-5 my-6'>
                {
                    data?.result?.map((b: IBooking)=><BookingCard booking={b} key={b.id} />)
                }
            </div>
            
        </div>
    );
};

export default Bookings;