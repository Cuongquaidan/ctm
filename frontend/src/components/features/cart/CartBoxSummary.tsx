"use client"
import { applyCoupon, getSummaryCart } from '@/lib/api/cart';
import { formatCurrency } from '@/lib/helper';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface CartBoxSummaryProps {
  isPurchase?: boolean;
  refresh?: () => void;
  total?: number;
  totalDiscount?: number;
  shippingFee?: number;
  finalTotal?: number;
}

function CartBoxSummary({
  isPurchase = false,
  refresh: triggerUpdate,
  total = 0,
  totalDiscount = 0,
  shippingFee = 0,
  finalTotal = 0
}: CartBoxSummaryProps) {
  // const [total, setTotal] = useState<number>(0);
  // const [totalDiscount, setTotalDiscount] = useState<number>(0);
  // const [shippingFee, setShippingFee] = useState<number>(0);
  // const [finalTotal, setFinalTotal] = useState<number>(0);
  const [couponCode, setCouponCode] = useState<string>('');
  const router = useRouter()
  const handleFetchSummary = async () => {

    const summary = await getSummaryCart();
    // setTotal(summary.total);
    // setTotalDiscount(summary.discount);
    // setShippingFee(summary.shippingFee);
    // setFinalTotal(summary.finalTotal);
  }
  const handleApplyCoupon = async (couponCode: string) => {
    const summary = await applyCoupon(couponCode);
    // setTotal(summary.total);
    // setTotalDiscount(summary.discount);
    // setShippingFee(summary.shippingFee);
    // setFinalTotal(summary.finalTotal);
  }
  useEffect(() => {
    handleFetchSummary();
  }, [triggerUpdate]); // Fetch lại khi triggerUpdate thay đổi

  const handleProceedToPurchase = () => {

    router.push('/customers/purchase')
  }

  return (
    <div className="mb-0">
      <div className="summery-box position-relative">
        <div className="cartTotalBox">
          <div className="summery-contain">
            {/* <div className="coupon-cart">
              <h6 className="text-content mb-2">Coupon Apply</h6>
              <div className="mb-3 coupon-box input-group">
                <input type="text" className="form-control"
                  placeholder="Enter Coupon Code Here..."
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)} />
                <button className="btn-apply" onClick={() => handleApplyCoupon(couponCode)}>Apply</button>
              </div>
            </div> */}
            <ul>
              <li>
                <h4>Tạm tính</h4>
                <h4 className="price itemTotal">{formatCurrency(total)}</h4>
              </li>
              {totalDiscount > 0 && (
                <li>
                  <h4>Giảm giá</h4>
                  <h4 className="price text-success">-{formatCurrency(totalDiscount)}</h4>
                </li>
              )}
              <li>
                <h4>Vận chuyển</h4>
                <h4 className="shippingPrice price">{formatCurrency(shippingFee)}</h4>
              </li>

            </ul>
          </div>
          <ul className="summery-total">
            <li className="list-total border-top-0 pb-0">
              <h4>Tổng tiền</h4>
              <h4 className="price totalTextPrice text-danger">{formatCurrency(finalTotal)}</h4>
            </li>
          </ul>
          <input className="totalPrice" type="hidden" name="total" value={finalTotal} />
        </div>
        <div className="button-group cart-button">
          <ul>
            <li>
              <button
                type="button"
                onClick={handleProceedToPurchase}
                className="btn btn-animation proceed-btn fw-bold mt-3 btnPurchase"
              >
                <span>{isPurchase ? 'Đặt hàng' : 'Mua hàng'}</span><i className="fa-solid fa-arrow-right icon"></i>
              </button>
            </li>
            <li>
              <button
                className="btn btn-light shopping-button text-dark"
                onClick={() => router.push('/')}
              >
                <i className="fa-solid fa-arrow-left-long"></i>Tiếp tục mua sắm                                    </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CartBoxSummary