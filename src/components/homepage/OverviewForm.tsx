'use client';
import React from 'react';
import Form from '../form/Form'
import FormInput from '../form/FormInput'
import FormButton from '../form/FormButton'
import FormTextArea from '../form/FormTextArea'

const OverviewForm = () => {
    const onSubmit = (data: any)=>{
        console.log(data)
    }
    
    return (
        <div>
            <Form submitHandler={onSubmit}>
                <div className='grid gap-4'>
                <FormInput type='text' name='topic'placeholder="Subject" />
                <FormTextArea type='text' name='message' placeholder="Message" />
                <div className='text-center'>
                <button value='Submit' type='submit' className='text-lg font-semibold py-2 px-4 bg-primary text-light rounded-full'>Submit</button></div> 
                </div>
            </Form>
        </div>
    );
};

export default OverviewForm;