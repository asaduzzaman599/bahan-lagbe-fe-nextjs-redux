'use client'
import Form from '@/components/form/Form'
import FormButton from '@/components/form/FormButton'
import FormInput from '@/components/form/FormInput'
import { useGetProfileQuery } from '@/redux/api/auth-api'
import { useUpdateProfileMutation } from '@/redux/api/users-api'
import { getUserInfo } from '@/services/auth.service'
import { signupInputValue } from '@/types'
import React from 'react';

const ProfileEditPage = () => {
    const {data: res} = useGetProfileQuery({})
    const data = res?.data
    const [updateProfile] = useUpdateProfileMutation()
    const onSumbit = async (inputData: signupInputValue) =>{
        try{
            const res = await updateProfile({ id: data.id, data: inputData})
            console.log('res',res)
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
                    <div className='mb-2'>
                        <FormInput name='name' type='text' placeholder='User name' label='User name'/>
                    </div>
                    <div  className='mb-2'>
                        <FormInput name='email' type='email' placeholder='Email' label='Email' disabled={true}/>
                    </div>
                    <div  className='mb-2'>
                        <FormInput name='contactNo' type='text' placeholder='Contact No' label='Contact No' />
                    </div>
                    <div  className='mb-2'>
                        <FormInput name='address' type='text' placeholder='Address' label='Address' />
                    </div>
                    <FormButton value='Submit' />
                </Form>
            </div>
        </div>
    );
};

export default ProfileEditPage;