import React from 'react'
import { ProductT } from '@/types/common.types'

interface CartButtonProps {
  product: ProductT;
}

function CartButton({ product }: CartButtonProps) {
  return (
    <li data-bs-toggle="tooltip-container" >
      <p className='custom-tooltip'> Mua ngay</p>
      <a href={"/product/" + product.alias} aria-label="Mua ngay">
        <i className="fa-light fa-cart-shopping font-17 text-theme"></i>
      </a>
    </li>
  )
}

export default CartButton