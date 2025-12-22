import React from 'react'

interface PaymentMethodProps {
  paymentMethod: {
    type: string
    description: string
  }
}

function PaymentMethod({ paymentMethod }: PaymentMethodProps) {
  return (
    <div className="summery-box">
      <div className="summery-header d-block">
        <h3>Payment Method</h3>
      </div>

      <ul className="summery-contain pb-0 border-bottom-0">
        <li className="d-block pt-0">
          <p className="text-content">{paymentMethod.description}</p>
        </li>
      </ul>
    </div>
  )
}

export default PaymentMethod
