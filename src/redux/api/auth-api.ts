import build from "next/dist/build"
import { baseApi } from "./base-api"
import { TagType } from "../tag-types"

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data) =>({
        url: '/auth/signin',
        method: 'POST',
        body: data
      }),
      invalidatesTags:[TagType.USER]
    }),
    signupUser: build.mutation({
      query: (data) =>({
        url: '/auth/signup',
        method: 'POST',
        body: data
      }),
      invalidatesTags:[TagType.USER]
    }),
  }),
})

export const { useLoginUserMutation, useSignupUserMutation } = authApi