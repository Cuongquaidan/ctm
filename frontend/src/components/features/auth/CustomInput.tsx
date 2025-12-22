import React from 'react'
interface CustomInputProps {
  value: any;
  setValue: (value: any) => void;
  name: string;
  placeholder: string;
  label: string;
  errorMessage?: string;
  errorRequired?: string;

}

function CustomInput({ value, setValue, name, placeholder, label, errorMessage, errorRequired, ...props }: CustomInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="col-12">
      <div className="form-floating theme-form-floating">
        <input type="text" className="form-control" name={name} placeholder={placeholder} required
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          data-required-error={errorRequired}
          data-error={errorMessage} />
        <label>{label}</label>
      </div>
    </div>
  )
}

export default CustomInput