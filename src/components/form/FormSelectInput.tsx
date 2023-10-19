"use client";

import React, { Children } from "react"
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?:boolean
  message?:string
  handleChange?: (el: string) => void;
  children: React.ReactNode
};

const FormSelectInput = ({
  name,
  size = "large",
  value,
  placeholder = "select",
  label,
  disabled,
  required,
  defaultValue,
  handleChange,
  message,
  children,
}: SelectFieldProps) => {

  const { control } = useFormContext();
  return (
    <>
      {label && <p className="text-xs font-semibold text-gray-900">{label}</p>}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
            <>
            <select
            onChange={ onChange}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
    
      >
        {
          children
        }
      </select>
              {message &&
        <p>{message}</p>}
      
              </>
            
          )
        }
      />
    </>
  );
};

export default FormSelectInput;