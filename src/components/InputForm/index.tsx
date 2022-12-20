import { StyledInput } from "../../styles/input";
import { StyledFieldset } from "./style";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface iInputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

export function InputForm({
  label,
  type,
  placeholder,
  register,
  ...rest
}: iInputFormProps) {
  return (
    <StyledFieldset>
      <label className="headline">{label}</label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        {...register}
        {...rest}
      />
    </StyledFieldset>
  );
}
