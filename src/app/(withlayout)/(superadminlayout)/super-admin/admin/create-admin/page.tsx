'use client'
import Form from '@/components/form/Form'
import FormButton from '@/components/form/FormButton'
import FormInput from '@/components/form/FormInput'
import { useCreateAdminMutation } from '@/redux/api/users-api'
import { signupInputValue } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react';

const AdminPage = () => {
    const [createAdmin] = useCreateAdminMutation()
    const router = useRouter()
    const onSubmit = async (inputData: signupInputValue) =>{
        try{
            const res = await createAdmin(inputData)
            // router.push('/super-admin/admin')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <div className='w-4/5 mx-auto p-6 bg-white'>
                <Form submitHandler={onSubmit}  >
                    <div className='mb-2'>
                        <FormInput name='name' type='text' placeholder='Admin name' required={true}/>
                    </div>
                    <div  className='mb-2'>
                        <FormInput name='email' type='email' placeholder='Email'  required={true}/>
                    </div>
                    <div  className='mb-2'>
                        <FormInput name='contactNo' type='text' placeholder='Contact No'  required={true}/>
                    </div>
                    <div  className='mb-2'>
                        <FormInput name='password' type='text' placeholder='Password'  />
                    </div>
                    <div  className='mb-2'>
                        <FormInput name='address' type='text' placeholder='Address' />
                    </div>
                    <FormButton value='Submit' />
                </Form>
            </div>
        </div>
    );
};

export default AdminPage;