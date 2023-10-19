
import { IFeedback } from "@/types"
import { TagType } from "../tag-types"
import { baseApi } from "./base-api"

export const feedbacksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFeedback: build.mutation({
      query: ( data:Partial<IFeedback>) =>({
        url: `/feedbacks/create-feedback`,
        method: 'POST',
        data,
      }),
      invalidatesTags:[TagType.FEEDBACKS]
    }),
    updateFeedback: build.mutation({
      query: (input: {id:string, data:Partial<IFeedback>}) =>({
        url: `/feedbacks/${input.id}`,
        method: 'PATCH',
        data: input.data
      }),
      invalidatesTags:[TagType.FEEDBACK]
    }),
    deleteFeedback: build.mutation({
      query: (id) =>({
        url: `/feedbacks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:[TagType.FEEDBACKS]
    }),
    getFeedbacks: build.query({
      query: () =>({
        url: '/feedbacks/',
        method: "GET",
      }),
      providesTags: [TagType.FEEDBACKS]
    }),
    getFeedback: build.query({
      query: (id:string) =>({
        url: `/feedbacks/${id}`,
        method: "GET",
      }),
      providesTags: [TagType.FEEDBACKS]
    }),
  }),
})

export const { useCreateFeedbackMutation, useUpdateFeedbackMutation, useGetFeedbackQuery, useGetFeedbacksQuery,useDeleteFeedbackMutation } = feedbacksApi