"use client"
import { getCart } from '@/lib/api/cart';
import { formatCurrency } from '@/lib/helper';
import { CartT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function CartBoxHover() {
  const [cart, setCart] = useState<CartT>();
  const [triggerUpdateCart, setTriggerUpdateCart] = useState<number>(0);

  const handleFetchCart = async () => {
    const resdata = await getCart();
    setCart(resdata);
  }

  useEffect(() => {
    handleFetchCart();
  }, [triggerUpdateCart]);
  return (
    <>
      <div className="onhover-div">
        <ul className="cart-list">
          {
            cart?.list?.map((item, itemIndex) => (
              // store.items.map((item, itemIndex) => (
              <li className="product-box-contain" key={`${itemIndex}`} style={{
                width: "100%"
              }}>
                <div className="drop-cart">
                  <p className="drop-image aspect-square ">
                    <ImageError src={item.image}
                      width={500}
                      height={500}
                      className=" lazyload aspect-square " style={{
                        maxWidth: "unset"
                      }} alt={item.product.name} />
                  </p>
                  <div className="drop-contain" style={{ width: "100%" }}>
                    < >
                      <h5 style={{
                        textWrap: "initial",
                        width: "100%",
                        textAlign: "start"
                      }}>{item.product.name}
                      </h5>
                    </>
                    <h6><span>{item.quantity} x</span> {formatCurrency(item.price)}</h6>
                    <button className="close-button close_button" onClick={() => { }}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))
          }

        </ul>

        <div className="price-box">
          <h5>Total :</h5>
          <h4 className="theme-color fw-bold">{formatCurrency(cart?.itemTotal || 0)}</h4>
        </div>

        <div className="button-group">
          <Link href="/customers/cart" className="btn btn-sm cart-button">View Cart</Link>
          <Link href="/customers/purchase" className="btn btn-sm cart-button theme-bg-color text-white">Checkout</Link>
        </div>
      </div>
    </>
  )
}

export default CartBoxHover