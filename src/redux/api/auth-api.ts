import { LoginInputValue, signupInputValue } from "@/types"
import { TagType } from "../tag-types"
import { baseApi } from "./base-api"

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data:LoginInputValue) =>({
        url: '/auth/signin',
        method: 'POST',
        body: data
      }),
      invalidatesTags:[TagType.USER]
    }),
    signupUser: build.mutation({
      query: (data: signupInputValue) =>({
        url: '/auth/signup',
        method: 'POST',
        body: data
      }),
      invalidatesTags:[TagType.USER]
    }),
  }),
})

export const { useLoginUserMutation, useSignupUserMutation } = authApi