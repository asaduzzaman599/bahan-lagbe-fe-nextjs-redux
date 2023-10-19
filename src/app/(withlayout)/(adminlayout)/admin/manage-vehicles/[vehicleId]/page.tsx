'use client';

import CommonButton from "@/components/ui/CommonButton"
import { useDeleteCategoryMutation, useGetCategoryQuery } from "@/redux/api/categories-api"
import { useDeleteVehicleMutation, useGetVehicleQuery } from "@/redux/api/vehicles-api"
import Link from "next/link"
import { useRouter } from "next/navigation"

type IDProps = {
    params: any;
  };

const VehiclesPage = ({params}: IDProps) => {
    const router = useRouter()
    const {vehicleId} = params
    const {data:res} = useGetVehicleQuery(vehicleId)
    const [deleteVehicle] = useDeleteVehicleMutation(vehicleId)
    const data = res?.data
    const handleDelete =async () => {
        const res = await deleteVehicle(vehicleId)
        console.log(res, vehicleId)
        if(res)
         router.push(`/manage-vehicles`)
    }
    return (
        <div>
            Category {data?.model}
            <div className="my-4 flex gap-4">
                <Link href={`/admin/manage-vehicles/${data?.id}/edit`}><CommonButton >Edit</CommonButton></Link>
                <button onClick={()=>{handleDelete()}}>
                    <CommonButton >Delete</CommonButton>
                    </button>
            </div>
        </div>
    );
};

export default VehiclesPage;