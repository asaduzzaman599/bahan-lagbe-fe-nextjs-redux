
import { IVehicle } from "@/types"
import { TagType } from "../tag-types"
import { baseApi } from "./base-api"

export const vehiclesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createVehicle: build.mutation({
      query: ( data:Partial<IVehicle>) =>({
        url: `/vehicles/create-Vehicle`,
        method: 'POST',
        data,
      }),
      invalidatesTags:[TagType.VEHICLES]
    }),
    updateVehicle: build.mutation({
      query: (input: {id:string, data:Partial<IVehicle>}) =>({
        url: `/vehicles/${input.id}`,
        method: 'PATCH',
        data: input.data
      }),
      invalidatesTags:[TagType.VEHICLE]
    }),
    deleteVehicle: build.mutation({
      query: (id) =>({
        url: `/vehicles/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:[TagType.USERS]
    }),
    getVehicles: build.query({
      query: () =>({
        url: '/vehicles/',
        method: "GET",
      }),
      providesTags: [TagType.VEHICLES]
    }),
    getVehicle: build.query({
      query: (id:string) =>({
        url: `/vehicles/${id}`,
        method: "GET",
      }),
      providesTags: [TagType.VEHICLES]
    }),
  }),
})

export const { useCreateVehicleMutation, useUpdateVehicleMutation, useGetVehicleQuery, useGetVehiclesQuery,useDeleteVehicleMutation } = vehiclesApi