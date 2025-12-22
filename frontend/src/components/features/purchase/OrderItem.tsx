import React from 'react'
import { OrderItemT } from '@/types/common.types'
import Link from 'next/link'

interface OrderItemProps {
  item: OrderItemT
}

function OrderItem({ item }: OrderItemProps) {
  return (
    <tr>
      <td className="product-detail">
        <div className="product border-0">
          <Link href="#" className="product-image">
            <img src={item.image} className="img-fluid  lazyload" alt={item.name} />
          </Link>
          <div className="product-detail">
            <ul>
              <li className="name">
                <Link href="#">{item.name}</Link>
              </li>
              <li className="text-content">Sold By: {item.seller}</li>
              <li className="text-content">Quantity - {item.quantity}</li>
            </ul>
          </div>
        </div>
      </td>

      <td className="price">
        <h4 className="table-title text-content">Price</h4>
        <h6 className="theme-color">${item.price.toFixed(2)}</h6>
      </td>

      <td className="quantity">
        <h4 className="table-title text-content">Qty</h4>
        <h4 className="text-title">{String(item.qty).padStart(2, '0')}</h4>
      </td>

      <td className="subtotal">
        <h4 className="table-title text-content">Total</h4>
        <h5>${item.total.toFixed(2)}</h5>
      </td>
    </tr>
  )
}

export default OrderItem
