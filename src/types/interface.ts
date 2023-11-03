import { BookingStatus, signupInputValue } from "."

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
export interface IFeedback{
  id?: string
  topic:string
  message:string
}
export interface IContent{
  id?: string
  title: string
  description:string
}
export interface IReviewAndRating{
  id?: string
  review: string
  rating: number
  bookingId: string
  booking: IBooking
  userId: string
  user: IUser
  createdAt: Date
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

export interface IBooking {
  id?: string
  startTime: Date
  endTime: Date
  vehicleId: string
  vehicle: IVehicle
  status: BookingStatus
  total?: number
  user?: IUser
}