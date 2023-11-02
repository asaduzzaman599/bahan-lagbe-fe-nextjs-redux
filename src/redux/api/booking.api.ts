
import { IBooking } from "@/types"
import { TagType } from "../tag-types"
import { baseApi } from "./base-api"

export const bookingsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: ( data:Partial<IBooking>) =>({
        url: `/bookings/create-booking`,
        method: 'POST',
        data,
      }),
      invalidatesTags:[TagType.BOOKINGS]
    }),
    updateBooking: build.mutation({
      query: (input: {id:string, data:Partial<IBooking>}) =>({
        url: `/bookings/${input.id}`,
        method: 'PATCH',
        data: input.data
      }),
      invalidatesTags:[TagType.BOOKING]
    }),
    deleteBooking: build.mutation({
      query: (id) =>({
        url: `/bookings/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:[TagType.BOOKINGS]
    }),
    getBookings: build.query({
      query: () =>({
        url: '/bookings/',
        method: "GET",
      }),
      providesTags: [TagType.BOOKINGS]
    }),
    getBookingsByVehicle: build.query({
      query: (id) =>({
        url: `/bookings/${id}/vehicle`,
        method: "GET",
      }),
      providesTags: [TagType.BOOKINGS]
    }),
    getBooking: build.query({
      query: (id:string) =>({
        url: `/bookings/${id}`,
        method: "GET",
      }),
      providesTags: [TagType.BOOKINGS,TagType.BOOKING]
    }),
  }),
})

export const { useCreateBookingMutation, useUpdateBookingMutation, useGetBookingQuery, useGetBookingsQuery,useDeleteBookingMutation } = bookingsApi