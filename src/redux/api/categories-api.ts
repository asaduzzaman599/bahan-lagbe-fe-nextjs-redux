
import { ICategory } from "@/types"
import { TagType } from "../tag-types"
import { baseApi } from "./base-api"

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: ( data:Partial<ICategory>) =>({
        url: `/categories/create-category`,
        method: 'POST',
        data,
      }),
      invalidatesTags:[TagType.CATEGORIES]
    }),
    updateCategory: build.mutation({
      query: (input: {id:string, data:Partial<ICategory>}) =>({
        url: `/categories/${input.id}`,
        method: 'PATCH',
        data: input.data
      }),
      invalidatesTags:[TagType.USER]
    }),
    deleteCategory: build.mutation({
      query: (id) =>({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:[TagType.USERS]
    }),
    getCategories: build.query({
      query: () =>({
        url: '/categories/',
        method: "GET",
      }),
      providesTags: [TagType.CATEGORIES]
    }),
    getCategory: build.query({
      query: (id:string) =>({
        url: `/categories/${id}`,
        method: "GET",
      }),
      providesTags: [TagType.CATEGORIES]
    }),
  }),
})

export const { useCreateCategoryMutation, useUpdateCategoryMutation, useGetCategoryQuery, useGetCategoriesQuery,useDeleteCategoryMutation } = categoriesApi