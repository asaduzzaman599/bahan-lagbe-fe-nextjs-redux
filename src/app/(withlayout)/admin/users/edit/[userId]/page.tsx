'use client'
import Form from '@/components/form/Form'
import FormButton from '@/components/form/FormButton'
import FormInput from '@/components/form/FormInput'
import FormSelectInput from '@/components/form/FormSelectInput'
import { USER_ROLE } from '@/constants/role'
import { useGetUserQuery, useUpdateProfileMutation } from '@/redux/api/users-api'
import { getUserInfo } from '@/services/auth.service'
import { signupInputValue } from '@/types'
import { useRouter } from 'next/navigation'

type IDProps = {
    params: any;
  };
  
const UpdateUser = ({ params }: IDProps) => {
    const { userId } = params;
    const router = useRouter()
    const {data: res} = useGetUserQuery(userId)
    const data = res?.data
    const [updateProfile] = useUpdateProfileMutation()
    const currentUser = getUserInfo() 
    const onSumbit = async (inputData: signupInputValue) =>{
        try{
            console.log('inputData',inputData)
            /* const res = await updateProfile({ id: data.id, data: {...inputData,
            ...(inputData.password ? { password: inputData.password } : {})}})
            router.push(`/admin/users/${data.id}`)
            console.log('res',res) */
        }catch(err){
            console.log(err)
        }
    }
     const defaultValues = {
        name: data?.name || '', 
        email: data?.email || '', 
        contactNo: data?.contactNo || '', 
        address: data?.address || ''
    };
    console.log(defaultValues) 
    return (
        <div>
            <div className='w-4/5 mx-auto p-6 bg-white'>
                <Form submitHandler={onSumbit} defaultValues={defaultValues} >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                    <div className='mb-2'>
                        <FormInput name='name' type='text' placeholder='User name' label='User Name'/>
                    </div>
                    <div  className='mb-2'>
                        <FormInput name='email' type='email' placeholder='Email' disabled={true}  label='Email'/>
                    </div>
                    <div  className='mb-2'>
                        <FormInput name='contactNo' type='text' placeholder='Contact No' label='Phone' />
                    </div>
                    <div  className='mb-2'>
                        <FormInput name='address' type='text' placeholder='Address' label='Address'/>
                    </div>
                    <div>
                        <FormInput name='password' type='password' placeholder='Password' label='Password' />

                    </div>
                    {
                        currentUser && currentUser?.role === USER_ROLE.SUPER_ADMIN && (
                        <div>
                            <FormSelectInput name="role" defaultValue={data?.role} label='User Role'>
                                <option value='admin'>Admin</option>
                                <option value='customer'>Customer</option>
                            </FormSelectInput>
                        </div>
                        )                        
                    }
                    {(currentUser && currentUser?.role === USER_ROLE.CUSTOMER ) && <div>
                        Role
                    </div>}
                    </div>
                    <FormButton value='Submit' />
                </Form>
            </div>
        </div>
    );
};

export default UpdateUser;