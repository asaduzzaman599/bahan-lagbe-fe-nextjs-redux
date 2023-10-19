"use client";
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
  disabled?: boolean
  required?: boolean
}

const FormInput = ({
  name,
  type,
  disabled,
  value,
  id,
  placeholder,
  label,
  message,
  required
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
              disabled={disabled}
              className={`border border-gray-200 text-sm py-2 px-4 w-full rounded outline-none bg-white text-gray-800 ${disabled? 'bg-gray-200 cursor-not-allowed':''}`}
              required={required}
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