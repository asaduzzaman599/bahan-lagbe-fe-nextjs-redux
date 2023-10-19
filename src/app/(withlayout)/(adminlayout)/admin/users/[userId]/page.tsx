'use client'
import { useGetUserQuery } from "@/redux/api/users-api"
import Link from "next/link"
type IDProps = {
    params: any;
  };
  
  
const UserPage = ({params}:IDProps) => {
    const {userId} = params
    const {data: res} = useGetUserQuery(userId)
    const data = res?.data
    
    return (
        <div className='w-4/5 mx-auto py-6 min-h-full flex flex-col justify-center items-center bg-white rounded'>
        <h3 className='p-4 text-lg font-semibold'>My Profile</h3>
        <div>
           <p>Name: {data?.name}</p>
           <p>Role: {data?.role}</p>
           <p>Email: {data?.email}</p>
           <p>Contact No: {data?.contactNo}</p>
           <p>Address: {data?.Address ?? 'N/A'}</p>
           <div className='mt-4'>
                <div className="flex flex-col gap-2 items-center">
                <Link href={`/admin/users/edit/${data?.id}`} >
                   <button className='bg-gray-900 text-sm font-bold text-white rounded px-6 py-2'>Update User</button>
                </Link>
                <button className='bg-gray-900 text-sm font-bold text-white rounded px-6 py-2'>Delete User</button>
           
                </div>
                </div>
        </div>
        </div>
    );
};

export default UserPage;