"use client"
import React, { useState, useEffect, useRef } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { formatCurrency } from '@/lib/helper';

interface PriceRangeFilterProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: [number, number];
  onChange?: (values: [number, number]) => void;
  currency?: string;
}

function PriceRangeFilter({
  min = 0,
  max = 1000000,
  step = 10000,
  defaultValue = [0, 1000000],
  onChange,
}: PriceRangeFilterProps) {
  const [values, setValues] = useState<[number, number]>(defaultValue);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleChange = (newValues: number | number[]) => {
    const valuesArray = Array.isArray(newValues) ? newValues as [number, number] : [newValues, newValues] as [number, number];
    setValues(valuesArray);
    if (onChange) {
      onChange(valuesArray);
    }
  };


  useEffect(() => {
    if (!sliderRef.current) return;

    const updateTooltips = () => {
      const handles = sliderRef.current?.querySelectorAll('.rc-slider-handle');
      if (!handles || handles.length !== 2) return;

      handles.forEach((handle, index) => {
        handle.classList.add('tooltip-container');
        let tooltip = handle.querySelector('.custom-tooltip') as HTMLElement;

        if (!tooltip) {
          tooltip = document.createElement('span');
          tooltip.className = 'custom-tooltip';
          handle.appendChild(tooltip);
        }

        tooltip.innerText = `${formatCurrency(values[index])}`;
      });
    };

    updateTooltips();
  }, [values]);

  return (
    <div className="p-4">
      <div ref={sliderRef} className="mb-4">
        <Slider
          range
          min={min}
          max={max}
          step={step}
          value={values}
          onChange={handleChange}
          allowCross={false}
          trackStyle={[{ backgroundColor: 'var(--theme-color)', height: 6 }]}
          handleStyle={[
            {
              borderColor: 'var(--theme-color)',
              backgroundColor: '#fff',
              width: 20,
              height: 20,
              marginTop: -7,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              opacity: 1
            },
            {
              borderColor: 'var(--theme-color)',
              backgroundColor: '#fff',
              width: 20,
              height: 20,
              marginTop: -7,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              opacity: 1
            }
          ]}
          railStyle={{ backgroundColor: '#e0e0e0', height: 6 }}
        />
      </div>
      <div className="d-flex justify-content-between align-items-center select-none" draggable="false">
        <input
          type="text"
          readOnly
          style={{ backgroundColor: "#fff" }}
          className='form-control text-center'
          value={`${formatCurrency(values[0])} - ${formatCurrency(values[1])}`}
        />
      </div>
    </div>
  )
}

export default PriceRangeFilter