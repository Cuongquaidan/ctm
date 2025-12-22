"use client";
import CheckoutSummary from '@/components/features/purchase/CheckoutSummary';
import DeliveryOption from '@/components/features/purchase/DeliveryOption';
import PaymentOption from '@/components/features/purchase/PaymentOption';
import SelectableAddressBoxGroup from '@/components/features/purchase/SelectableAddressBoxGroup';
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import ImageError from '@/components/ui/ImageError';
import React from 'react'

function page() {

  return (
    <>
      <BreadcrumbBackToHome current='Thanh toán' title='Thanh toán'></BreadcrumbBackToHome>
      <section className="checkout-section-2 section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-lg-8">
              <div className='left-sidebar-checkout'>
                <div className='checkout-detail-box'>
                  <ul>
                    <li>
                      <SelectableAddressBoxGroup></SelectableAddressBoxGroup>
                    </li>
                    <li>
                      <DeliveryOption></DeliveryOption>
                    </li>
                    <li>
                      <PaymentOption></PaymentOption>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <CheckoutSummary></CheckoutSummary>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page