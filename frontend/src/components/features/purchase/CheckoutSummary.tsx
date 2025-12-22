"use client"
import { getCart } from '@/lib/api/cart';
import { formatCurrency } from '@/lib/helper';
import { CartT } from '@/types/common.types';
import ImageError from '@/components/ui/ImageError'
import React, { useEffect, useState } from 'react'

function CheckoutSummary() {
  const [cart, setCart] = useState<CartT>();

  const handleFetchCart = async () => {
    const resdata = await getCart();
    setCart(resdata);
  }
  useEffect(() => {
    handleFetchCart();
  }, []);
  return (
    <div className="right-side-summery-box">
      <div className="summery-box-2">
        <div className="summery-header">
          <h3>Order Summary</h3>
        </div>

        <ul className="summery-contain">
          {/* {cart?.items?.map((store, storeIndex) => (
            store.items.map((item, itemIndex) => (
              <li key={`${storeIndex}-${itemIndex}`}>
                <ImageError width={300} height={300} src={item.image}
                  className="img-fluid lazyloaded checkout-image" alt={item.name} />
                <h4>{item.name} <span>X {item.quantity}</span></h4>
                <h4 className="price">{formatCurrency(item.price)}</h4>
              </li>
            ))
          ))} */}

        </ul>

        <ul className="summery-total">
          <li>
            <h4>Subtotal</h4>
            {/* <h4 className="price">{formatCurrency(cart?.totalPrice || 0)}</h4> */}
          </li>

          <li>
            <h4>Shipping</h4>
            <h4 className="price">{formatCurrency(8.90)}</h4>
          </li>

          <li>
            <h4>Tax</h4>
            <h4 className="price">{formatCurrency(29.498)}</h4>
          </li>

          <li>
            <h4>Coupon/Code</h4>
            <h4 className="price">{formatCurrency(-23.10)}</h4>
          </li>

          <li className="list-total">
            <h4>Total (USD)</h4>
            {/* <h4 className="price">{formatCurrency(cart?.totalPrice || 0 + 8.90 + 29.498 - 23.10)}</h4> */}
          </li>
        </ul>
      </div>

      <div className="checkout-offer">
        <div className="offer-title">
          <div className="offer-name">
            <h6>Available Offers</h6>
          </div>
        </div>

        <ul className="offer-detail">
          <li>
            <p>Combo: BB Royal Almond/Badam Californian, Extra Bold 100 gm...</p>
          </li>
          <li>
            <p>combo: Royal Cashew Californian, Extra Bold 100 gm + BB Royal Honey 500 gm</p>
          </li>
        </ul>
      </div>

      <button className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold">Place Order</button>
    </div>
  )
}

export default CheckoutSummary