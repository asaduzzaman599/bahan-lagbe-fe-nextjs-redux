import React from 'react';
import CommonTitle from '../ui/CommonTitle'
import Reviews from '@/modules/Review/Reviews'

const ReviewsSection = () => {
    return (
        <div className='container mx-auto my-6 p-10'>
            <CommonTitle title='Reviews and Ratings' subText="What our customer say's from there experience" />
        <div className='text-center tex-sm'>
            <Reviews />
        </div>
        </div>
    );
};

export default ReviewsSection;