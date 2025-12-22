"use client"
import React from 'react';
import Select, { StylesConfig } from 'react-select';

export interface OptionType {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: OptionType[];
  value: OptionType | null;
  onChange: (option: OptionType | null) => void;
  placeholder?: string;
  label: string;
  error?: string;
  isDisabled?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
}

const customStyles = (hasError?: boolean): StylesConfig<OptionType, false> => ({
  control: (provided: any, state: any) => ({
    ...provided,
    minHeight: '58px',
    height: '58px',
    borderColor: hasError ? '#dc3545' : (state.isFocused ? 'var(--theme-color)' : provided.borderColor),
    boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(var(--theme-color-rgb), 0.25)' : provided.boxShadow,
    backgroundColor: state.isDisabled ? '#fff' : provided.backgroundColor,
    opacity: state.isDisabled ? 0.6 : 1,
    cursor: state.isDisabled ? 'not-allowed' : 'default',
    '&:hover': {
      borderColor: hasError ? '#dc3545' : 'var(--theme-color)',
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'var(--theme-color)'
      : state.isFocused
        ? 'var(--theme-color)'
        : 'white',
    color: state.isSelected || state.isFocused ? 'white' : '#222',
    padding: '10px 12px',
    cursor: 'pointer',
    '&:active': {
      backgroundColor: 'var(--theme-color)',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    zIndex: 9999,
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: '#6c757d',
  }),
});

function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "",
  label,
  error,
  isDisabled = false,
  isClearable = true,
  isSearchable = true,
}: CustomSelectProps) {
  return (
    <div className="form-group col-md-12">
      <div className="form-floating theme-form-floating">
        <Select
          options={options}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          styles={customStyles(!!error)}
          isDisabled={isDisabled}
          isClearable={isClearable}
          isSearchable={isSearchable}
        />
        <label className="floating-label">{label}</label>
      </div>
      <style jsx>{`
        .floating-label {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: calc(14px + 4 * (100vw - 320px) / 1600);
          top: -5px;
          left: 5px;
          height: 31px;
          background-color: #fff;
          white-space: nowrap;
          opacity: 1;
          padding: 0 5px;
          z-index: 1;
          transform: scale(0.85) translateY(-.5rem) translateX(.15rem);
        }
      `}</style>
      {error && <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>{error}</div>}
    </div>
  );
}

export default CustomSelect;
