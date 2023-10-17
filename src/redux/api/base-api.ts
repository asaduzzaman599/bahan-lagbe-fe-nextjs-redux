import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TagTypeList } from '../tag-types'
import { getBaseUrl } from '@/helpers/config/envConfig'
// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),  
  tagTypes: TagTypeList
})