import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TagTypeList } from '../tag-types'
// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bahan-lagbe.vercel.app/api/v1' }),
  endpoints: () => ({}),  
  tagTypes: TagTypeList
})