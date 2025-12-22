import React from 'react'
import { ProductT } from '@/types/common.types'

interface CartButtonV2Props {
  product: ProductT;
}

function CartButtonV2({ product }: CartButtonV2Props) {
  return (
    <button className="buy-box btn theme-bg-color text-white btn-cart tooltip-container border-0"  >
      <p className='custom-tooltip'> Mua ngay</p>
      <a href={"product/" + product.alias} aria-label="Mua ngay">
        <i className="fa-light fa-cart-shopping font-17 iconly-Buy icli text-white"></i>
      </a>
    </button>
  )
}

export default CartButtonV2