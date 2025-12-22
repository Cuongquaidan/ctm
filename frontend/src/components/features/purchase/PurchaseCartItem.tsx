
import { CartItemItemT } from '@/types/common.types';
import ImageError from '@/components/ui/ImageError';
import React from 'react'

interface PurchaseCartItemProps {
  item: CartItemItemT;
}
function PurchaseCartItem({ item }: PurchaseCartItemProps) {
  return (
    <div className="w-100 productBox" >
      <div className="d-flex align-items-center py-2">
        <div className="product-detail flex-1">
          <div className="d-flex align-items-center">
            <a href="" className="product-image me-3">
              <ImageError width={200} height={200} src={item.image} data-src="https://ca-ctm.systems.com.vn/styles/logo.png" className="object-fit-cover lazyload w-45 h-45" alt="Cafe đen" />
            </a>
            <div>
              <div className="name mb-0">
                <a className="text-black text-1-line" href="">{item.name}</a>
              </div>
              <p className="mb-0">
                Đơn vị bán: {item.unit}                                                                </p>
            </div>
          </div>
        </div>
        <div className="subtotal text-end w-xl-150 w-md-90">
          x{item.quantity}                                                      <h5 className="text-danger">0 ₫</h5>
        </div>
      </div>
    </div>
  )
}

export default PurchaseCartItem