"use client";

import Form from "@/components/form/Form"
import FormButton from "@/components/form/FormButton"
import FormInput from "@/components/form/FormInput"
import { useSignupUserMutation } from "@/redux/api/auth-api"
import { isLoggedIn } from "@/services/auth.service"
import { signupInputValue } from "@/types"
import { useRouter } from "next/navigation"

const Signup =  () => {
    const [signupUser] = useSignupUserMutation()
    const router = useRouter();

    
    if(isLoggedIn()){
      router.push("/");
    }

    const onSubmit = async (data: signupInputValue)=>{
         const res = await signupUser(data)
        console.log('res',res)
    }
    return (
        <div>
            <h2 className=" mb-4 text-xl font-semibold text-gray-900">Sign In</h2>
           <Form submitHandler={onSubmit}>
            <div className="mb-2">
              <FormInput name="name" type="text" 
                placeholder="Your Name" label="User Name" />
            </div>
            <div  className="mb-2">
              <FormInput name="email" type="email" 
                placeholder="Email" label="Email" />
            </div>
            <div
              className="mb-2"
            >
              <FormInput
                name="password"
                type="password"
                placeholder="Password"
                label="Password"
              />
            </div>
            <div
              className="mb-2"
            >
              <FormInput
                name="contactNo"
                type="text"
                placeholder="Contact No"
                label="Phone"
              />
            </div>
            <div
            className="mb-2"
            >
              <FormInput
                name="password"
                type="password"
                placeholder="Password"
                label="User Password"
              />
            </div>
            <FormButton value='Signup' />
          </Form>
        </div>
    );
};

export default Signup;