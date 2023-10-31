'use client'

import Form from "@/components/form/Form"
import FormButton from "@/components/form/FormButton"
import FormInput from "@/components/form/FormInput"
import CommonTitle from "@/components/ui/CommonTitle"
import { useGetCategoryQuery, useUpdateCategoryMutation } from "@/redux/api/categories-api"
import { ICategory } from "@/types"
import { useRouter } from "next/navigation"

type IDProps = {
    params: any;
  };

const CategoryUpdatePage = ({params}: IDProps ) => {
    const router = useRouter()
    const {categoryId} = params
    const {data:res} = useGetCategoryQuery(categoryId)
    const [updateCategory] = useUpdateCategoryMutation()
    const data = res?.data

    const onSubmit = async(inputData: Partial<ICategory>)=>{
        try{
             const res = await updateCategory({id: data.id, data: inputData}).unwrap()
            console.log('res',res.data)
            if(res?.data?.id)
            router.push(`/admin/manage-categories/${data.id}`)
            
        }catch(err){
            console.log(err)
        }

    }

    const defaultValues = {
        title: data?.title ?? ''
    }
    return (
        <div className="w-4/5 p-6 mx-auto">
            <CommonTitle title="Update Category" /> 
            <div className="my-2">
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                <div className="mb-2">
                <FormInput name="title" placeholder="Title" label="Category Title" required={true} />
                </div>
                <FormButton value='Submit' />
                </Form>
            </div>
        </div>
    );
};

export default CategoryUpdatePage;