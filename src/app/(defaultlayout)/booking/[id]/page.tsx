'use client'
import BookingDetails from '@/modules/Booking/BookingDetails'
import React from 'react';
type IDParams = {
    params: any
}
const BookingDetailsPage = ({params}:IDParams ) => {
    const {id} = params
    return (
        <div>
            <BookingDetails id={id} />
        </div>
    );
};

export default BookingDetailsPage;