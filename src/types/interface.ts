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