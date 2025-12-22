import React from 'react'

interface VariantCircleOptionsProps {
  title: string;
  name: string;
  options: {
    label: string;
    value: string;
    isDisabled?: boolean;
  }[];
  onOptionSelect: (value: string) => void;
}
function VariantCircleOptions({ title, options, name, onOptionSelect }: VariantCircleOptionsProps) {
  return (
    <div className="product-package">
      <div className="product-title">
        <h4>{title}</h4>
      </div>

      <ul className="circle select-package">
        {options.map((option) => (
          <li className="form-check"
            style={{
              paddingLeft: 0
            }}
            key={option.value}>
            <input
              className={`form-check-input ${option.isDisabled ? 'disabled' : ''}`}
              type="radio"
              name={name}
              id={"variant-circle-option-" + option.value}
              onChange={() => onOptionSelect(option.value)}
              disabled={option.isDisabled}
            />
            <label className="form-check-label" htmlFor={"variant-circle-option-" + option.value}>
              <span>{option.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VariantCircleOptions