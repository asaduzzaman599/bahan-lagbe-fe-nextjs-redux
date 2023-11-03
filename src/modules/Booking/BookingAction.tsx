'use client'
import Loading from '@/components/ui/Loading'
import { USER_ROLE } from '@/constants/role'
import { useUpdateBookingMutation } from '@/redux/api/booking.api'
import { getUserInfo } from '@/services/auth.service'
import { BookingStatus, IBooking } from '@/types'
import { format } from 'date-fns'

const BookingAction = ({booking}: {booking: IBooking}) => {
    const [bookingUpdate] = useUpdateBookingMutation()
    const currentUser = getUserInfo()
    const triggerAction = async (status: BookingStatus) =>{
      try {
        const res = await bookingUpdate({id:booking.id as string, data: { status }})
      } catch (e){
        console.log(e)
      }
    }
    if(!currentUser) return <Loading />

    let action;
    if(currentUser.role === USER_ROLE.ADMIN || currentUser.role === USER_ROLE.SUPER_ADMIN){
        if(booking.status === BookingStatus.PENDING) {
            action = (<div className='flex gap-4 items-center'>
                <button className='text-sm font-bold text-light bg-primary py-1 px-4 rounded-lg' onClick={()=>triggerAction(BookingStatus.BOOKED)}>Approve</button>
                <button className='text-sm font-bold text-light bg-red-600 py-1 px-4 rounded-lg' onClick={()=>triggerAction(BookingStatus.REJECT)}>Reject</button>
            </div>)
        } else if(booking.status === BookingStatus.BOOKED) {
            action = (<div className='flex gap-4 items-center'>
                <button className='text-sm font-bold text-light bg-primary py-1 px-4 rounded-lg' onClick={()=>triggerAction(BookingStatus.COMPLETED)}>Complete</button>
                <button className='text-sm font-bold text-light bg-danger py-1 px-4 rounded-lg' onClick={()=>triggerAction(BookingStatus.CANCELLED)}>Cancel</button>
            </div>)
        }
    }else{
        if(booking.status === BookingStatus.PENDING || booking.status === BookingStatus.BOOKED) {
            action = (<div className='flex gap-4 items-center'>
                <button className='text-sm font-bold text-primary border border-primary rounded-lg bg-light py-1 px-4' onClick={()=>triggerAction(BookingStatus.CANCELLED)}>Cancel</button>
            </div>)
        }
    }


    return (
        <div className='w-full p-6 rounded-xl shadow-xl'>
            <h4 className='text-xl font-bold text-accent'> {booking.status}</h4>
            <div className='py-4 grid'>
               <p> From: {format(new Date(booking.startTime),'dd MMMM, yyyy, EEEE')}</p>
                <p>TO: {format(new Date(booking.endTime),'dd MMMM yyyy, EEEE')}</p>
               <p> Pick Time: {format(new Date(booking.startTime),'hh:mm a')} </p>
               <p className='mt-4 text-right font-bold text-secondary text-lg'> Total Cost: <span className='y'>{booking.total}</span> </p>
            </div>
            <div className='my-6 '>
                {action}
            </div>
        </div>
    );
};

export default BookingAction;