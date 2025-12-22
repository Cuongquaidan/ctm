import React from 'react'
import CartTableFooter from '@/components/features/cart/CartTableFooter'
import ServiceBox from '@/components/features/purchase/ServiceBox'
import PurchaseCartItem from '@/components/features/purchase/PurchaseCartItem'
import PurchaseTableHeader from '@/components/features/purchase/PurchaseTableHeader'
import { CartItemT } from '@/types/common.types'

interface PurchaseTableProps {
  item: CartItemT;
}

function PurchaseTable({ item }: PurchaseTableProps) {

  return (
    <div className='bg-gray rounded mb-4'>
      {/* <PurchaseTableHeader count={item.items.length} storeId={item.storeId} storeName={item.storeName} storeSlug={item.storeSlug}></PurchaseTableHeader> */}
      <div className='px-3 px-xxl-4'>
        <div className='row align-items-center'>
          <div className="col-xxl-6 col-md-7">
            <div className='cartTable'>
              {/* {item.items.map((cartItem, index) => (
                <PurchaseCartItem key={index} item={cartItem} />
              ))} */}
            </div>
          </div>
          <div className="col-xxl-6 col-md-7">

            <ServiceBox></ServiceBox>

          </div>

        </div>
        {/* <CartTableFooter storeId={item.storeId}></CartTableFooter> */}
      </div>
    </div>
  )
}

export default PurchaseTable