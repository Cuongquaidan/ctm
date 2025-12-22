'use client'
import React from 'react'
interface VariantSelectOptionsProps {
  title?: string;
  options: {
    label: string;
    value: string;
    isDisabled?: boolean;

  }[];
  defaultValue?: string;
  onOptionSelect: (value: string) => void;
}

function VariantSelectOptions(
  { title, options, defaultValue, onOptionSelect }: VariantSelectOptionsProps
) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onOptionSelect(e.target.value);
  };

  return (
    <div className="product-package">
      {title && <div className="product-title">
        <h4>{title}</h4>
      </div>}

      <div className="select-package">
        <select
          className="form-control form-select"
          onChange={handleChange}
          defaultValue={defaultValue}
        >
          {defaultValue && <option value="">{defaultValue}</option>}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.isDisabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default VariantSelectOptions