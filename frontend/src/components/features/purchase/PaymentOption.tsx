"use client"
import React, { useState, useRef, useEffect } from 'react'
import CheckoutItem from '@/components/features/purchase/CheckoutItem'
import CustomDropdown from '@/components/ui/CustomDropdown'
import CustomFormCheck from '@/components/ui/CustomFormCheck'
import LordIcon from '@/components/ui/icons/LordIcon'

type PaymentMethodType = 'cash' | 'credit' | 'banking' | 'wallet';

function PaymentOption() {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethodType>('cash');
  const [openAccordion, setOpenAccordion] = useState<PaymentMethodType>('cash');

  const cashRef = useRef<HTMLDivElement>(null);
  const creditRef = useRef<HTMLDivElement>(null);
  const bankingRef = useRef<HTMLDivElement>(null);
  const walletRef = useRef<HTMLDivElement>(null);

  const handlePaymentClick = (method: PaymentMethodType) => {
    setSelectedPayment(method);
    setOpenAccordion(method);
  };

  useEffect(() => {
    const refs = {
      cash: cashRef,
      credit: creditRef,
      banking: bankingRef,
      wallet: walletRef,
    };

    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) {
        const scrollHeight = ref.current.scrollHeight;

        if (key === openAccordion) {
          // Mở
          ref.current.style.transition = 'max-height 0.35s ease';
          ref.current.style.maxHeight = `${scrollHeight}px`;
        } else {
          // Đóng
          ref.current.style.transition = 'max-height 0.35s ease';
          ref.current.style.maxHeight = '0px';
        }
      }
    });
  }, [openAccordion]);

  return (
    <CheckoutItem title='Payment Option' icon={<LordIcon icon={require("@/assets/lordicon/qmcsqnle.json")} primary='#0baf9a' secondary='#0baf9a' size={40} />}>
      <div className="accordion accordion-flush custom-accordion"
        id="accordionFlushExample">
        {/* Cash on Delivery */}
        <div className="accordion-item">
          <div className="accordion-header" id="flush-headingFour">
            <div
              className={`accordion-button ${openAccordion !== 'cash' ? 'collapsed' : ''}`}
              onClick={() => handlePaymentClick('cash')}
              style={{ cursor: 'pointer' }}
            >
              <div className={`custom-form-check form-check mb-0 ${selectedPayment === 'cash' ? 'show-box-checked' : ''}`}>
                <label className="form-check-label" htmlFor="cash">
                  <input
                    className="form-check-input mt-0"
                    type="radio"
                    name="flexRadioDefault"
                    id="cash"
                    checked={selectedPayment === 'cash'}
                    onChange={() => { }}
                  /> Cash On Delivery
                </label>
              </div>
            </div>
          </div>
          <div className="accordion-collapse" ref={cashRef} style={{ overflow: 'hidden', maxHeight: 0 }}>
            <div className="accordion-body">
              <p className="cod-review">Pay digitally with SMS Pay
                Link. Cash may not be accepted in COVID restricted
                areas. <a href="javascript:void(0)">Know more.</a>
              </p>
            </div>
          </div>
        </div>

        {/* Credit or Debit Card */}
        <div className="accordion-item">
          <div className="accordion-header" id="flush-headingOne">
            <div
              className={`accordion-button ${openAccordion !== 'credit' ? 'collapsed' : ''}`}
              onClick={() => handlePaymentClick('credit')}
              style={{ cursor: 'pointer' }}
            >
              <div className={`custom-form-check form-check mb-0 ${selectedPayment === 'credit' ? 'show-box-checked' : ''}`}>
                <label className="form-check-label" htmlFor="credit">
                  <input
                    className="form-check-input mt-0"
                    type="radio"
                    name="flexRadioDefault"
                    id="credit"
                    checked={selectedPayment === 'credit'}
                    onChange={() => { }}
                  /> Credit or Debit Card
                </label>
              </div>
            </div>
          </div>
          <div className="accordion-collapse" ref={creditRef} style={{ overflow: 'hidden', maxHeight: 0 }}>
            <div className="accordion-body">
              <div className="row g-2">
                <div className="col-12">
                  <div className="payment-method">
                    <div
                      className="form-floating mb-lg-3 mb-2 theme-form-floating">
                      <input type="text" className="form-control"
                        id="credit2"
                        placeholder="Enter Credit & Debit Card Number" />
                      <label htmlFor="credit2">Enter Credit & Debit
                        Card Number</label>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4">
                  <div
                    className="form-floating mb-lg-3 mb-2 theme-form-floating">
                    <input type="text" className="form-control"
                      id="expiry" placeholder="Enter Expiry Date" />
                    <label htmlFor="expiry">Expiry Date</label>
                  </div>
                </div>

                <div className="col-xxl-4">
                  <div
                    className="form-floating mb-lg-3 mb-2 theme-form-floating">
                    <input type="text" className="form-control" id="cvv"
                      placeholder="Enter CVV Number" />
                    <label htmlFor="cvv">CVV Number</label>
                  </div>
                </div>

                <div className="col-xxl-4">
                  <div
                    className="form-floating mb-lg-3 mb-2 theme-form-floating">
                    <input type="password" className="form-control"
                      id="password" placeholder="Enter Password" />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>

                <div className="button-group mt-0">
                  <ul>
                    <li>
                      <button
                        className="btn btn-light shopping-button">Cancel</button>
                    </li>

                    <li>
                      <button className="btn btn-animation">Use This
                        Card</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Net Banking */}
        <div className="accordion-item">
          <div className="accordion-header" id="flush-headingTwo">
            <div
              className={`accordion-button ${openAccordion !== 'banking' ? 'collapsed' : ''}`}
              onClick={() => handlePaymentClick('banking')}
              style={{ cursor: 'pointer' }}
            >
              <div className={`custom-form-check form-check mb-0 ${selectedPayment === 'banking' ? 'show-box-checked' : ''}`}>
                <label className="form-check-label" htmlFor="banking">
                  <input
                    className="form-check-input mt-0"
                    type="radio"
                    name="flexRadioDefault"
                    id="banking"
                    checked={selectedPayment === 'banking'}
                    onChange={() => { }}
                  /> Net Banking
                </label>
              </div>
            </div>
          </div>
          <div className="accordion-collapse" ref={bankingRef} style={{ overflow: 'hidden', maxHeight: 0 }}>
            <div className="accordion-body">
              <h5 className="text-uppercase mb-4">Select Your Bank
              </h5>
              <div className="row g-2">
                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <input className="form-check-input mt-0"
                      type="radio" name="flexRadioDefault"
                      id="bank1" />
                    <label className="form-check-label"
                      htmlFor="bank1">Industrial & Commercial
                      Bank</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <input className="form-check-input mt-0"
                      type="radio" name="flexRadioDefault"
                      id="bank2" />
                    <label className="form-check-label"
                      htmlFor="bank2">Agricultural Bank</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <input className="form-check-input mt-0"
                      type="radio" name="flexRadioDefault"
                      id="bank3" />
                    <label className="form-check-label" htmlFor="bank3">Bank
                      of America</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <input className="form-check-input mt-0"
                      type="radio" name="flexRadioDefault"
                      id="bank4" />
                    <label className="form-check-label"
                      htmlFor="bank4">Construction Bank Corp.</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <input className="form-check-input mt-0"
                      type="radio" name="flexRadioDefault"
                      id="bank5" />
                    <label className="form-check-label" htmlFor="bank5">HSBC
                      Holdings</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <input className="form-check-input mt-0"
                      type="radio" name="flexRadioDefault"
                      id="bank6" />
                    <label className="form-check-label"
                      htmlFor="bank6">JPMorgan Chase & Co.</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="select-option">
                    <div className="form-floating theme-form-floating">
                      <select
                        className="form-select theme-form-select">
                        <option value="hsbc">HSBC Holdings
                        </option>
                        <option value="loyds">Lloyds Banking
                          Group</option>
                        <option value="natwest">Nat West Group
                        </option>
                        <option value="Barclays">Barclays
                        </option>
                        <option value="other">Others Bank
                        </option>
                      </select>
                      <label>Select Other Bank</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Wallet */}
        <div className="accordion-item">
          <div className="accordion-header" id="flush-headingThree">
            <div
              className={`accordion-button ${openAccordion !== 'wallet' ? 'collapsed' : ''}`}
              onClick={() => handlePaymentClick('wallet')}
              style={{ cursor: 'pointer' }}
            >
              <div className={`custom-form-check form-check mb-0 ${selectedPayment === 'wallet' ? 'show-box-checked' : ''}`}>
                <label className="form-check-label" htmlFor="wallet">
                  <input
                    className="form-check-input mt-0"
                    type="radio"
                    name="flexRadioDefault"
                    id="wallet"
                    checked={selectedPayment === 'wallet'}
                    onChange={() => { }}
                  /> My Wallet
                </label>
              </div>
            </div>
          </div>
          <div className="accordion-collapse" ref={walletRef} style={{ overflow: 'hidden', maxHeight: 0 }}>
            <div className="accordion-body">
              <h5 className="text-uppercase mb-4">Select Your Wallet
              </h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <label className="form-check-label"
                      htmlFor="amazon"><input
                        className="form-check-input mt-0"
                        type="radio" name="flexRadioDefault"
                        id="amazon" />Amazon Pay</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <input className="form-check-input mt-0"
                      type="radio" name="flexRadioDefault"
                      id="gpay" />
                    <label className="form-check-label"
                      htmlFor="gpay">Google Pay</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <input className="form-check-input mt-0"
                      type="radio" name="flexRadioDefault"
                      id="airtel" />
                    <label className="form-check-label"
                      htmlFor="airtel">Airtel Money</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <input className="form-check-input mt-0"
                      type="radio" name="flexRadioDefault"
                      id="paytm" />
                    <label className="form-check-label"
                      htmlFor="paytm">Paytm Pay</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <input className="form-check-input mt-0"
                      type="radio" name="flexRadioDefault"
                      id="jio" />
                    <label className="form-check-label" htmlFor="jio">JIO
                      Money</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="custom-form-check form-check">
                    <input className="form-check-input mt-0"
                      type="radio" name="flexRadioDefault"
                      id="free" />
                    <label className="form-check-label"
                      htmlFor="free">Freecharge</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CheckoutItem>
  )
}

export default PaymentOption