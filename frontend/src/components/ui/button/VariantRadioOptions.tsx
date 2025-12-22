import React from 'react'

interface VariantRectangleOptionsProps {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
  onOptionSelect: (value: string) => void;
}
interface VariantRadioOptionsProps {
  title: string;
  name: string;
  options: {
    label: string;
    value: string;
    isDisabled?: boolean;
  }[];
  onOptionSelect: (value: string) => void;
}

function VariantRadioOptions({ title, options, name, onOptionSelect }: VariantRadioOptionsProps) {
  return (
    <div className="product-package">
      <div className="product-radio-list select-package">
        {options.map((option) => (
          <div className="form-check" key={option.value}>
            <input
              type="radio"
              className={`form-check-input ${option.isDisabled ? 'disabled' : ''}`}
              id={`variant-radio-option-${option.value}`}
              name={`radio-group-${name}`}
              value={option.value}
              onChange={() => onOptionSelect(option.value)}
              disabled={option.isDisabled}
            />
            <label className="form-check-label" htmlFor={`variant-radio-option-${option.value}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VariantRadioOptions