'use client'
import { useGetVehiclesQuery } from '@/redux/api/vehicles-api'
import { IVehicle } from '@/types'
import Link from 'next/link'

const VehiclesPage = () => {
    const {data: res} = useGetVehiclesQuery({})
    const data = res?.data
    console.log(data)
    const vehicles = data?.result?.map((i:IVehicle)=>({ id: i.id, model: i.model, type: i.type, category: i.category, price: i.price, status: i.status }))
    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Manage Vehicles</h1>
          <p className="mt-2 text-sm text-gray-700">
           
          </p>
        </div>
        {/* currentUser && currentUser.role === USER_ROLE.SUPER_ADMIN && */ <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link href={'/admin/manage-vehicles/create-vehicle'}>
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Vehicle
          </button>
          </Link>
        </div>}
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Model
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Type
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Category
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Price
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {vehicles?.map((v: Partial<IVehicle>) => (
                  <tr key={v.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {v.model}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v.type}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v.category?.title}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v.price}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v.status}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <Link href={`/admin/manage-vehicles/${v.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {v.model}</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default VehiclesPage;