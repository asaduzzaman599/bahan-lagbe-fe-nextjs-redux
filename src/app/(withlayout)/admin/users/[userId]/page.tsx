'use client'
import { useGetUserQuery } from "@/redux/api/users-api"
type IDProps = {
    params: any;
  };
  
  
const UserPage = ({params}:IDProps) => {
    const {userId} = params
    console.log('userId',userId)
    const {data: res} = useGetUserQuery(userId)
    const data = res?.data
    return (
        <div>
            User page {data?.name}
        </div>
    );
};

export default UserPage;