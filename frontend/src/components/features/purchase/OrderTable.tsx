import React from 'react'
import { OrderItemT } from '@/types/common.types'
import OrderItem from '@/components/features/purchase/OrderItem'

interface OrderTableProps {
  items: OrderItemT[]
}

function OrderTable({ items }: OrderTableProps) {
  return (
    <div className="cart-table order-table order-table-2">
      <div className="table-responsive">
        <table className="table mb-0">
          <tbody>
            {items.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderTable
