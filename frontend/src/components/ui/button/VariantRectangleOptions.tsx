import React from 'react'

interface VariantRectangleOptionsProps {
  title: string;
  name: string;
  options: {
    label: string;
    value: string;
    isDisabled?: boolean;
  }[];
  onOptionSelect: (value: string) => void;
}

function VariantRectangleOptions({ title, options, name, onOptionSelect }: VariantRectangleOptionsProps) {
  return (
    <div className="product-package">
      <div className="product-title">
        <h4>{title}</h4>
      </div>

      <ul className="rectangle select-package">
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
              id={"variant-rectangle-option-" + option.value}
              onChange={() => onOptionSelect(option.value)}
              disabled={option.isDisabled}
            />
            <label className="form-check-label" htmlFor={"variant-rectangle-option-" + option.value}>
              <span>{option.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VariantRectangleOptions