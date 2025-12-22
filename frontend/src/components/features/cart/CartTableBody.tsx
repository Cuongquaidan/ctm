import React from 'react'
import { CartItemT, VoucherStoreT } from '@/types/common.types'
import CartTableItem from '@/components/features/cart/CartTableItem'

interface CartTableBodyProps {
  items: CartItemT[];
  onCheckItem: (cartId: number) => void;
  refresh: () => void;
}

function CartTableBody({
  items,
  onCheckItem,
  refresh,
}: CartTableBodyProps) {
  return (
    <div className="cart-body">
      {items.map((item, index) => (
        <CartTableItem
          key={index}
          item={item}
          onCheck={onCheckItem}
          refresh={refresh}
        />
      ))}
    </div>
  )
}

export default CartTableBody