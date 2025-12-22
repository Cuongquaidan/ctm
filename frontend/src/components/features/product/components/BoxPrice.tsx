import { formatCurrency } from '@/lib/helper';
import React from 'react'

interface BoxPriceProps {
  price: number;
  oldPrice?: number;
}

function BoxPrice({ price, oldPrice }: BoxPriceProps) {
  return (
    <div className="box-price">
      <span className="theme-color price mt-0">{formatCurrency(price)}  </span>
      {oldPrice && <del className='ms-1'>
        <small>{formatCurrency(oldPrice)} </small>
      </del>}
    </div>
  )
}

export default BoxPrice