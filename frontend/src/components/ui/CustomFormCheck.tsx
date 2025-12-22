import React from 'react'
interface CustomFormCheckProps {
  className?: string
  id: string
  value: string
  name: string
  children: React.ReactNode
}
function CustomFormCheck({ className, id, value, name, children }: CustomFormCheckProps) {
  return (
    <div className={`mb-0 form-check custom-form-check hide-check-box ${className}`}>
      <input className="form-check-input" type="radio" name={name} id={id} value={value} />
      <label className="form-check-label ms-2" htmlFor={id}>{children}</label>
    </div>
  )
}

export default CustomFormCheck