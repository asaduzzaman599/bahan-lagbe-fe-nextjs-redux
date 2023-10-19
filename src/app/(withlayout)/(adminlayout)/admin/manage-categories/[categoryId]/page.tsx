'use client';

import CommonButton from "@/components/ui/CommonButton"
import { useDeleteCategoryMutation, useGetCategoryQuery } from "@/redux/api/categories-api"
import Link from "next/link"
import { useRouter } from "next/navigation"

type IDProps = {
    params: any;
  };

const CategoriesPage = ({params}: IDProps) => {
    const router = useRouter()
    const {categoryId} = params
    const {data:res} = useGetCategoryQuery(categoryId)
    const [deleteCategory] = useDeleteCategoryMutation(categoryId)
    const data = res?.data
    const handleDelete =async () => {
        const res = await deleteCategory(categoryId)
        console.log(res, categoryId)
        if(res)
         router.push(`/manage-categories`)
    }
    return (
        <div>
            Category {data?.title}
            <div className="my-4 flex gap-4">
                <Link href={`/admin/manage-categories/${data?.id}/edit`}><CommonButton >Edit</CommonButton></Link>
                <button onClick={()=>{handleDelete()}}>
                    <CommonButton >Delete</CommonButton>
                    </button>
            </div>
        </div>
    );
};

export default CategoriesPage;