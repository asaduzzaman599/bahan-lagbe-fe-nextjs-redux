'use client'

import Loading from "@/components/ui/Loading"
import { useGetReviewAndRatingsQuery } from "@/redux/api/reviewAndRating-api"
import ReviewCard from "./ReviewCard"
import { IReviewAndRating } from "@/types"

const Reviews = () => {
    const {data:resData, isLoading} = useGetReviewAndRatingsQuery({})

    if(isLoading || !resData) return <Loading />
    
    const data = resData?.data
    return (
        <div className="my-4 grid grid-cols-2 lg:grid-cols-4">
            {
                data?.slice(0,6)?.map((d: IReviewAndRating)=><ReviewCard reviewAndRating={d} key={d.id} />)
            }
        </div>
    );
};

export default Reviews;