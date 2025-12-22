import React from 'react'

interface PriceDetailsProps {
  priceDetails: {
    subtotal: number
    saving: number
    couponDiscount: number
    total: number
  }
  itemCount: number
}

function PriceDetails({ priceDetails, itemCount }: PriceDetailsProps) {
  return (
    <div className="summery-box">
      <div className="summery-header">
        <h3>Price Details</h3>
        <h5 className="ms-auto theme-color">({itemCount} Items)</h5>
      </div>

      <ul className="summery-contain">
        <li>
          <h4>Vegetables Total</h4>
          <h4 className="price">${priceDetails.subtotal.toFixed(2)}</h4>
        </li>

        <li>
          <h4>Vegetables Saving</h4>
          <h4 className="price theme-color">${priceDetails.saving.toFixed(2)}</h4>
        </li>

        <li>
          <h4>Coupon Discount</h4>
          <h4 className="price text-danger">${priceDetails.couponDiscount.toFixed(2)}</h4>
        </li>
      </ul>

      <ul className="summery-total">
        <li className="list-total">
          <h4>Total (USD)</h4>
          <h4 className="price">${priceDetails.total.toFixed(2)}</h4>
        </li>
      </ul>
    </div>
  )
}

export default PriceDetails
