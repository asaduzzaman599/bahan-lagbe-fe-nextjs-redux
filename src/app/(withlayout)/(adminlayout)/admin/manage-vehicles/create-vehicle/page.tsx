'use client'

import Form from "@/components/form/Form"
import FormButton from "@/components/form/FormButton"
import FormInput from "@/components/form/FormInput"
import FormSelectInput from "@/components/form/FormSelectInput"
import CommonTitle from "@/components/ui/CommonTitle"
import { useGetCategoriesQuery } from "@/redux/api/categories-api"
import { useCreateVehicleMutation } from "@/redux/api/vehicles-api"
import { ICategory, IVehicle } from "@/types"
import { useRouter } from "next/navigation"

const VehicleCreatePage = () => {
    const router = useRouter()
    const [createVehicle]= useCreateVehicleMutation()
    const {data: categoriesRes}= useGetCategoriesQuery({})
    const categoriesData = categoriesRes?.data

    const onSubmit = async(inputData: Partial<IVehicle>)=>{
        try{
            if(inputData.price)
            inputData.price = Number(inputData.price)

            const res = await createVehicle(inputData).unwrap()
            if(res?.data?.id)
            router.push(`/admin/manage-vehicles/${res?.data?.id}`) 
            
        }catch(err){
            console.log(err)
        }

    }
    return (
        <div className="w-4/5 p-6 mx-auto">
            <CommonTitle title="Create Category" /> 
            <div className="my-2">
                <Form submitHandler={onSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-4">
                <div>
                <FormInput name="model" placeholder="Model" label="Vehicle Model" required={true} />
                </div>
                <div>
                <FormSelectInput name="type" placeholder="Select Vehicle Type" label="Vehicle Type" required={true} defaultValue="SMALL">
                    <option value="SMALL">Small</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="LARGE">Large</option>
                </FormSelectInput>
                </div>
                <div>
                <FormInput name="plateNumber" placeholder="Plate Number" label="Vehicle Plate Number" required={true} />
                </div>
                <div>
                <FormSelectInput name="categoryId" placeholder="Select Category" label="vehicle Category" required={true} >
                    {
                        categoriesData?.map((i:ICategory)=><option value={i.id} key={i.id}>{i.title}</option>)
                    }
                </FormSelectInput>
                </div>
                <div>
                <FormInput name="price" type="number" placeholder="Price Per Day" label="Price Per Day" required={true} />
                </div>
                </div>
                <FormButton value='Submit' />
                </Form>
            </div>
        </div>
    );
};

export default VehicleCreatePage;