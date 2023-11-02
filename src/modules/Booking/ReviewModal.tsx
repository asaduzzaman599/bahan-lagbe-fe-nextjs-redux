'use client'
import Form from '@/components/form/Form'
import FormTextArea from '@/components/form/FormTextArea'
import Modal from '@/components/ui/Modal'
import { useCreateReviewAndRatingMutation } from '@/redux/api/reviewAndRating-api'
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ReviewModal = ({open, setOpen,selectedId} :{selectedId: string; open: boolean; setOpen: Dispatch<SetStateAction<boolean>>;}) => {
    const [addReview] = useCreateReviewAndRatingMutation()
    const [rating, setRating] = useState(0)
    const submit = async ({review}:{review: string}) =>{
        try {
            const data = {
                rating,
                review,
                bookingId:selectedId
            }
            const res:any = await addReview(data)
            if(res?.data?.success){
                setOpen(false)
            }
        }catch (e) {
            console.log(e)
        }
    }
    return (
        <Modal open={open} setOpen={setOpen} title='Review and rating'>
                <div className='w-full'>
                    <Form submitHandler={submit}>
                        <FormTextArea name='review' placeholder='Your Review'/>
                        <div className='my-2'> 
                        
                        <Rating style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
                        </div>
                        <button type='submit' className='py-2 px-4 rounded-lg bg-primary text-light'>Add</button>
                    </Form>
                </div>
        </Modal>
    );
};

export default ReviewModal;