'use client'
import Loading from '@/components/ui/Loading'
import { useGetBookingQuery } from '@/redux/api/booking.api'
import { getUserInfo } from '@/services/auth.service'
import { BookingStatus } from '@/types'
import { Rating } from '@smastrom/react-rating'
import { useState } from 'react'
import BookingAction from './BookingAction'
import ReviewModal from './ReviewModal'

import '@smastrom/react-rating/style.css'

type IDParams = {
    id: string
}
const BookingDetails = ({id}:IDParams) => { 
    const {data: resData, isLoading} = useGetBookingQuery(id)
    const currentUser = getUserInfo()
    
    const [open, setOpen] = useState(false)


    if(isLoading || !resData)
    return <Loading />
    const data = resData.data
    const vehicle = data.vehicle
    const reviewAndRatings = data?.reviewAndRatings
    return (
        <div>
            <div className='container mx-auto p-10'>
                <h3 className='text-xl font-bold text-primary my-4'> Booking Details </h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className='w-full p-6 rounded-xl shadow-xl'>
                        <div>
                            vehicle image
                        </div>
                        <div className='w-full'>
                             <div className='text-center'>
                                <p className='text-lg font-semibold text-primary'>{vehicle?.model}</p>
                                <p className='text-sm font-light text-gray'>{vehicle.category.title}</p>
                            </div>
                            <div>
                                <p className='font-bold text-secondary'>Type: {vehicle.type}</p>
                                <p className='font-bold text-secondary'>Price: <span className='text-accent'>{vehicle.price}</span><span className='text-secondary font-light'>(per day)</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <BookingAction booking={data} />
                        
                    </div>
                </div>
                <div className='my-4 w-3/4 mx-auto p-6 rounded-lg shadow-lg text-primary font-bold text-xl mb-2'>
                   <h3>Your Review</h3> 

                   {
                    (data.status === BookingStatus.COMPLETED && !data.reviewAndRatings && currentUser && currentUser.userId === data.userId) &&  <button className='text-sm py-2 px-4 bg-primary rounded-lg text-light font-bold' onClick={()=>setOpen(true)}>Add Review</button>
                   }

                   {reviewAndRatings && <>
                   <Rating style={{ maxWidth: 100 }} value={data.reviewAndRatings?.rating}  />
                   <p className='text-secondary'>{data.reviewAndRatings.review}</p>
                   </>}
                </div>
            </div>
            <ReviewModal selectedId={data.id} open={open} setOpen={setOpen} />
        </div>
    );
};

export default BookingDetails;