'use client'

import Form from "@/components/form/Form"
import FormButton from "@/components/form/FormButton"
import FormInput from "@/components/form/FormInput"
import CommonTitle from "@/components/ui/CommonTitle"
import { useCreateCategoryMutation } from "@/redux/api/categories-api"
import { ICategory } from "@/types"
import { useRouter } from "next/navigation"

const CategoryCreatePage = () => {
    const router = useRouter()
    const [createCategory]= useCreateCategoryMutation()

    const onSubmit = async(inputData: Partial<ICategory>)=>{
        try{
             const res = await createCategory(inputData).unwrap()
            console.log('res',res?.data)
            if(res?.data?.id)
            router.push(`/admin/manage-categories/${res?.data.id}`)
            
        }catch(err){
            console.log(err)
        }

    }
    return (
        <div className="w-4/5 p-6 mx-auto">
            <CommonTitle>Create Category</CommonTitle> 
            <div className="my-2">
                <Form submitHandler={onSubmit}>
                <div className="mb-2">
                <FormInput name="title" placeholder="Title" label="Category Title" required={true} />
                </div>
                <FormButton value='Submit' />
                </Form>
            </div>
        </div>
    );
};

export default CategoryCreatePage;