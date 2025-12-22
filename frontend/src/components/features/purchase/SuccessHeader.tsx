import React from 'react'
import SuccessCheckmark from '@/components/features/purchase/SuccessCheckmark'

interface SuccessHeaderProps {
  transactionId: string
}

function SuccessHeader({ transactionId }: SuccessHeaderProps) {
  return (
    <section className="breadcrumb-section pt-0">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-contain breadcrumb-order">
              <div className="order-box flex flex-col">
                <div className="order-image">
                  <SuccessCheckmark />
                </div>

                <div className="order-contain text-center">
                  <h3 className="theme-color">Order Success</h3>
                  <h5 className="text-content">Payment Is Successfully And Your Order Is On The Way</h5>
                  <h6>Transaction ID: {transactionId}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessHeader
