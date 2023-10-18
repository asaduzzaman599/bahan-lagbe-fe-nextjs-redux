import { LoginInputValue, signupInputValue } from "@/types"
import { TagType } from "../tag-types"
import { baseApi } from "./base-api"

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateProfile: build.mutation({
      query: (input: {id:string, data:Partial<signupInputValue>}) =>({
        url: `/users/${input.id}`,
        method: 'PATCH',
        data: input.data
      }),
      invalidatesTags:[TagType.USER]
    }),
    deleteUser: build.mutation({
      query: (id) =>({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:[TagType.USERS]
    }),
    createAdmin: build.mutation({
      query: ( data:signupInputValue) =>({
        url: `/users/create-admin`,
        method: 'POST',
        data,
      }),
      invalidatesTags:[TagType.USER]
    }),
    getUsers: build.query({
      query: () =>({
        url: '/users/',
        method: "GET",
      }),
      providesTags: [TagType.USERS]
    }),
    getUser: build.query({
      query: (id:string) =>({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: [TagType.USER]
    }),
  }),
})

export const { useGetUsersQuery, useUpdateProfileMutation, useCreateAdminMutation, useGetUserQuery } = userApi