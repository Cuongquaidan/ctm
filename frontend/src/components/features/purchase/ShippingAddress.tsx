import React from 'react'
import Link from 'next/link'

interface ShippingAddressProps {
  shippingAddress: {
    address: string
    city: string
    zipCode: string
    expectedDelivery: string
    trackingUrl?: string
  }
}

function ShippingAddress({ shippingAddress }: ShippingAddressProps) {
  return (
    <div className="summery-box">
      <div className="summery-header d-block">
        <h3>Shipping Address</h3>
      </div>

      <ul className="summery-contain pb-0 border-bottom-0">
        <li className="d-block">
          <h4>{shippingAddress.address}</h4>
          <h4 className="mt-2">{shippingAddress.city}</h4>
        </li>

        <li className="pb-0">
          <h4>Expected Date Of Delivery:</h4>
          <h4 className="price theme-color">
            {shippingAddress.trackingUrl ? (
              <Link href={shippingAddress.trackingUrl} className="text-danger">
                Track Order
              </Link>
            ) : (
              <span className="text-danger">Track Order</span>
            )}
          </h4>
        </li>
      </ul>

      <ul className="summery-total">
        <li className="list-total border-top-0 pt-2">
          <h4 className="fw-bold">{shippingAddress.expectedDelivery}</h4>
        </li>
      </ul>
    </div>
  )
}

export default ShippingAddress
