import { IReviewAndRating } from '@/types'
import { Rating } from '@smastrom/react-rating'
import React from 'react';
import {format} from 'date-fns'
import noImage from '@/assets/img/no-image.png'

import '@smastrom/react-rating/style.css'
import Image from 'next/image'

const ReviewCard = ({reviewAndRating}:{reviewAndRating: IReviewAndRating}) => {
    return (
        <div className='flex w-full h-full p-6 rounded-lg border border-accent gap-2'>
            <div className='w-full'>
            <div className='flex items-center gap-2'>
            <div className='w-12 '>
                <Image src={noImage} alt='no image' height={100} width={100} />
            </div>
                <div className='w-full flex justify-between'>
                    <div>
                        <p className='text-sm font-bold text-primary'>{reviewAndRating.user.name}</p>
                    </div>
                    <div>
                       <p className='text-secondary text-xs'>
                       {
                            format(new Date(reviewAndRating.createdAt),'dd/MM/yyyy')
                        }
                       </p>
                    </div>
                </div>
            </div>
                <div className='flex flex-col justify-center gap-2'>
                <div>
                <Rating style={{maxWidth: 100, margin:'0 auto'}} value={reviewAndRating.rating} readOnly />
                </div>
                <p className='text-sm font-light text-secondary'>
                        {reviewAndRating.review}
                </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;