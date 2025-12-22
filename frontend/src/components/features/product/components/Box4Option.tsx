import React from 'react'
import { Eye, RefreshCw, ShoppingCart, Heart } from 'lucide-react'
import { ProductT } from '@/types/common.types'
import WishListButton from '@/components/ui/button/WishListButton'
import CartButton from '@/components/ui/button/CartButton'
import CartButtonV2 from '@/components/ui/button/CartButtonV2'
function Box4Option({ product }: { product: ProductT }) {
  return (
    <ul className="option">
      <li className='tooltip-customer' data-bs-toggle="tooltip" data-bs-placement="top" title="Add to cart">
        <p className='custom-tooltip'>Add to cart</p>

        <CartButtonV2 product={product}></CartButtonV2>

      </li>
      <li className='tooltip-customer' data-bs-toggle="tooltip" data-bs-placement="top" title="Add to cart">
        <p className='custom-tooltip'>Add to cart</p>

        <WishListButton productId={product.id}></WishListButton>

      </li>
      <li className='tooltip-customer' data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
        <p className='custom-tooltip'>Quick View</p>
        <a>
          <Eye className='iconly-Show icli' strokeWidth={1} />
        </a>
      </li>
      <li className='tooltip-customer' data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
        <p className='custom-tooltip'>Compare</p>
        <a >
          <RefreshCw className='iconly-Swap icli' strokeWidth={1} />
        </a>
      </li>
    </ul>
  )
}

export default Box4Option