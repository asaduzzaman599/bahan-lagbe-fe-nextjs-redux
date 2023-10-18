"use client";

import Form from "@/components/form/Form"
import FormButton from "@/components/form/FormButton"
import FormInput from "@/components/form/FormInput"
import { useLoginUserMutation } from "@/redux/api/auth-api"
import { storeUserInfo } from "@/services/auth.service"
import { LoginInputValue } from "@/types"
import { useRouter } from "next/navigation"

const Login =  () => {
    const [loginUser] = useLoginUserMutation()
    const router = useRouter();
    const onSubmit = async (data: LoginInputValue)=>{
      try {
        const res = await loginUser(data).unwrap()
        if (res?.token) {
          router.push("/");
          console.log("User logged in successfully!");
          storeUserInfo({ accessToken: res?.token });
        }
      } catch (err: any) {
        console.error(err.message);
      }
    }
    return (
        <div>
            <h2 className=" mb-4 text-xl font-semibold text-gray-900">Sign In</h2>
           <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="email" type="email" 
                placeholder="Email" label="Email" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                placeholder="Password"
                label="User Password"
              />
            </div>
            <FormButton value='LOGIN' />
          </Form>
        </div>
    );
};

export default Login;