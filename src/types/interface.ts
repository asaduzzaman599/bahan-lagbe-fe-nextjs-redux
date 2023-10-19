import { signupInputValue } from "."

export interface ICategory {
  id?: string
  title: string

  vehicles?: IVehicle[]
}


export interface IVehicle {
  id?: string
  model: string
  type: string
  plateNumber: string
  price: number
  status?:string
  imageUrl?: string

  categoryId: string
  category?: ICategory
}

export interface QueryType {
  size?: number 
  page?: number 
  sortBy?: string 
  sortOrder?: 'asc' | 'desc' 
}

export interface IVehicleQueryType extends QueryType{
  minPrice?: number
  naxPrice?: number
  search?: string
  status?: string
}


export type IUser  =signupInputValue & {
  id: string;
}