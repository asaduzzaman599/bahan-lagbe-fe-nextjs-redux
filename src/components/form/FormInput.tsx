"use client";

import { Input, Typography } from "@material-tailwind/react"
import { Controller, useFormContext } from "react-hook-form"
interface IInput {
  name: string;
  type?: string;
  size?: "lg" | "md";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  label?: string;
  message?: string;
}

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  label,
    message
}: IInput) => {
  const { control } = useFormContext();

  return (
    <>
      {label && <p className="text-xs font-semibold text-gray-900">{label}</p>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
            <>
            <input
              type={type}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              id={id}
              className="border border-gray-200 text-sm py-2 px-4 w-full rounded outline-none bg-white text-gray-800"
              />
              {message &&
        <p>{message}</p>}
      
              </>
            
          )
        }
      />
    </>
  );
};

export default FormInput;