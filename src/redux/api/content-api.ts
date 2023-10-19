
import { IContent } from "@/types"
import { TagType } from "../tag-types"
import { baseApi } from "./base-api"

export const contentsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createContent: build.mutation({
      query: ( data:Partial<IContent>) =>({
        url: `/contents/create-content`,
        method: 'POST',
        data,
      }),
      invalidatesTags:[TagType.CONTENTS]
    }),
    updateContent: build.mutation({
      query: (input: {id:string, data:Partial<IContent>}) =>({
        url: `/contents/${input.id}`,
        method: 'PATCH',
        data: input.data
      }),
      invalidatesTags:[TagType.CONTENT]
    }),
    deleteContent: build.mutation({
      query: (id) =>({
        url: `/contents/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:[TagType.CONTENTS]
    }),
    getContents: build.query({
      query: () =>({
        url: '/contents/',
        method: "GET",
      }),
      providesTags: [TagType.CONTENTS]
    }),
    getContent: build.query({
      query: (id:string) =>({
        url: `/contents/${id}`,
        method: "GET",
      }),
      providesTags: [TagType.CONTENTS]
    }),
  }),
})

export const { useCreateContentMutation, useUpdateContentMutation, useGetContentQuery, useGetContentsQuery,useDeleteContentMutation } = contentsApi