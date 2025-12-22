'use client'
import React, { useState } from 'react'
import CheckoutItem from '@/components/features/purchase/CheckoutItem'
import LordIcon from '@/components/ui/icons/LordIcon'

type DeliveryType = 'standard' | 'future';

function DeliveryOption() {
  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryType>('future');

  const handleDeliveryChange = (type: DeliveryType) => {
    setSelectedDelivery(type);
  };

  return (
    <CheckoutItem title='Delivery Option' icon={<LordIcon icon={require("@/assets/lordicon/kxoxiwrf.json")} primary='#0baf9a' secondary='#0baf9a' tertiary='#0baf9a' size={40} />} >
      <div className="row g-4">
        <div className="col-xxl-6">
          <div className="delivery-option">
            <div className="delivery-category">
              <div className="shipment-detail">
                <div
                  className={`form-check custom-form-check ${selectedDelivery === 'standard' ? 'show-box-checked' : 'hide-check-box'}`}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="standard"
                    id="standard"
                    checked={selectedDelivery === 'standard'}
                    onChange={() => handleDeliveryChange('standard')}
                  />
                  <label className="form-check-label"
                    htmlFor="standard">Standard
                    Delivery Option</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-6">
          <div className="delivery-option">
            <div className="delivery-category">
              <div className="shipment-detail">
                <div
                  className={`form-check mb-0 custom-form-check ${selectedDelivery === 'future' ? 'show-box-checked' : 'hide-check-box'}`}>
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={selectedDelivery === 'future'}
                    name="standard"
                    id="future"
                    onChange={() => handleDeliveryChange('future')}
                  />
                  <label className="form-check-label" htmlFor="future">Future
                    Delivery Option</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`col-12 future-box ${selectedDelivery === 'future' ? 'show' : ''}`}>
          <div className="future-option">
            <div className="row g-md-0 gy-4">
              <div className="col-md-6">
                <div className="delivery-items">
                  <div>
                    <h5 className="items text-content"><span>3
                      Items</span>@
                      $693.48</h5>
                    <h5 className="charge text-content">Delivery Charge
                      $34.67
                      <button type="button" className="btn p-0"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Extra Charge">
                        <i
                          className="fa-solid fa-circle-exclamation"></i>
                      </button>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <form
                  className="form-floating theme-form-floating date-box">
                  <input type="date" className="form-control" />
                  <label>Select Date</label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </CheckoutItem>
  )
}

export default DeliveryOption