import { formatCurrency } from '@/lib/helper'
import { ServiceItem } from '@/types/common.types';
import React from 'react'

interface ServiceBoxItemProps {
  item: ServiceItem;
}
function ServiceBoxItem({ item }: ServiceBoxItemProps) {
  return (
    <div className="row"
      style={{
        minHeight: "25px",

      }}
    >
      <div className='mb-3 col-xl-12'>
        <div className='mb-0 form-check custom-form-check hide-check-box d-flex align-items-center'>
          <input type="radio" id={item.id} name={item.name} className='form-check-input cbserviceId' />
          <label className='form-check-label ms-2 d-flex justify-content-between w-100' htmlFor={item.id}>
            <div>{item.description}</div>
            <div>{formatCurrency(item.price)}</div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ServiceBoxItem