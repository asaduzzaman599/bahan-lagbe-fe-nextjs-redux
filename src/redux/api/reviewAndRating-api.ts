
import { IReviewAndRating } from "@/types"
import { TagType } from "../tag-types"
import { baseApi } from "./base-api"

export const reviewAndRatingsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReviewAndRating: build.mutation({
      query: ( data:Partial<IReviewAndRating>) =>({
        url: `/review-rating/create-review-rating`,
        method: 'POST',
        data,
      }),
      invalidatesTags:[TagType.REVIEWANDRATINGS, TagType.BOOKING]
    }),
    updateReviewAndRating: build.mutation({
      query: (input: {id:string, data:Partial<IReviewAndRating>}) =>({
        url: `/review-rating/${input.id}`,
        method: 'PATCH',
        data: input.data
      }),
      invalidatesTags:[TagType.REVIEWANDRATING]
    }),
    deleteReviewAndRating: build.mutation({
      query: (id) =>({
        url: `/review-rating/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:[TagType.REVIEWANDRATINGS]
    }),
    getReviewAndRatings: build.query({
      query: () =>({
        url: '/review-rating/',
        method: "GET",
      }),
      providesTags: [TagType.REVIEWANDRATINGS]
    }),
    getReviewAndRating: build.query({
      query: (id:string) =>({
        url: `/review-rating/${id}`,
        method: "GET",
      }),
      providesTags: [TagType.REVIEWANDRATINGS]
    }),
  }),
})

export const { useCreateReviewAndRatingMutation, useUpdateReviewAndRatingMutation, useGetReviewAndRatingQuery, useGetReviewAndRatingsQuery,useDeleteReviewAndRatingMutation } = reviewAndRatingsApi