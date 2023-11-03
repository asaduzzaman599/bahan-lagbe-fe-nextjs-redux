'use client'
import { useGetBookingsQuery } from '@/redux/api/booking.api'
import { IBooking } from '@/types'
import Link from 'next/link'
import React from 'react';
import {format} from 'date-fns';
import Loading from '@/components/ui/Loading'

const ManageBookingPage = () => {
    const {data: res, isLoading} = useGetBookingsQuery({})

    if(isLoading || !res) return <Loading />
    const data = res?.data?.result

    const booking = data?.map((i: IBooking)=>({
        id: i.id,name: i.user?.name, phone: i.user?.contactNo,vehicle: i.vehicle.model, startDate:format(new Date(i.startTime),'dd/MM/yyy'),endDate:format(new Date(i.endTime),'dd/MM/yyy'),cost: i.total,status: i.status
    }))
    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Manage Bookings</h1>
          <p className="mt-2 text-sm text-gray-700">
           
          </p>
        </div>
        {/* currentUser && currentUser.role === USER_ROLE.SUPER_ADMIN &&  <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link href={'/admin/manage-categories/create-category'}>
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Categories
          </button>
          </Link>
        </div> */}
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Customer Name
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Contact No
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  Model
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Start Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    End Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Cost
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
                {booking?.map((v: any) => (
                  <tr key={v.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v.phone}</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {v?.vehicle}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v.startDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v.endDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v.cost}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v.status}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex gap-2 justify-end">
                      <Link href={`/booking/${v.id}`} className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {v.title}</span>
                      </Link>
                      {/* <button onClick={()=>deleteBooking(v.id)} className="text-red-600 hover:text-indigo-900">
                        Delete<span className="sr-only">, {v.title}</span>
                      </button> */}
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

export default ManageBookingPage;