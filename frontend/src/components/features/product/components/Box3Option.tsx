import WishListButton from '@/components/ui/button/WishListButton'
import { Eye, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Box3OptionProps {
  productId: number
}
function Box3Option({ productId }: Box3OptionProps) {

  return (
    <ul className="product-option" style={{
    }}>
      <li >

        <Link href={`/product/${productId}`} className='tooltip-container d-flex justify-center align-items-center'>

          <p className='custom-tooltip'>Detail</p>
          <Eye />
        </Link>
      </li>

      <li>
        <a className='tooltip-container d-flex justify-center align-items-center'>
          <p className='custom-tooltip'>Compare</p>
          <RefreshCw />
        </a>
      </li>


      <li>
        <WishListButton productId={productId} color='#000' hasTooltip={true} />
      </li>

    </ul>
  )
}

export default Box3Option