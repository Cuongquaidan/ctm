"use client"

import { useModalLogin } from '@/app/(sites)/layout';
import { useAuthContext } from '@/components/features/provider/AuthProvider';
import { updateCart } from '@/lib/api/cart';
import React, { useState, useEffect } from 'react'

function VerticalProductButtonAddV2({ productId, productPriceId, stock, isInProcessing }: { productId: number, productPriceId: number, stock: number, isInProcessing?: boolean }) {
  const { setIsOpen } = useModalLogin();
  const { hasAuth, handleGetNumberOfStoreInCart, cart, handleGetCart } = useAuthContext();
  const [quantity, setQuantity] = useState<string>("0");
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (cart?.list) {
      const cartItem = cart.list.find(item => item.product_id === productId && item.product_price_id === productPriceId);
      if (cartItem && cartItem.quantity > 0) {
        setIsAdded(true);
        setQuantity(cartItem.quantity.toString());
      } else {
        setIsAdded(false);
        setQuantity("0");
      }
    }
  }, [cart, productId, productPriceId]);

  const handleUpdateCart = async (quantity: number) => {
    const res = await updateCart(productId, productPriceId, quantity);
    if (res) {
      handleGetNumberOfStoreInCart();
      handleGetCart();
    }
  }

  return (
    <div className="addtocart_btn"
      style={{
        zIndex: 1000,
        height: "43px",
        background: "#eee",
        marginTop: "0px",
        display: "inline-block"
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (!hasAuth) {
          setIsOpen(true);
        }
      }}
    >

      {stock === 0 ? (
        <div
          className="add-button addcart-button btn buy-button text-light tooltip-container "
          style={{
            pointerEvents: "none",
            cursor: "not-allowed",
            background: "#eee",
            marginTop: "0px",
            padding: "8px",
          }}
        >
          Hết hàng

          {/* <span className="custom-tooltip "
            style={{
              position: "absolute"
            }}
          >Opps no</span> */}
        </div>
      ) : !isAdded ? (
        <div
          className="add-button addcart-button btn buy-button text-light tooltip-container"
          onClick={() => {
            if (hasAuth) {
              handleUpdateCart(1);
              setIsAdded(true);
              setQuantity("1");
            }

          }}
          style={{
            // background: "white"
            marginTop: "0px",
            display: "flex",
            padding: "8px",
            position: "relative",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <p style={{
            paddingBottom: "3px",
            margin: 0
          }}>Thêm</p>
          <div className="add-icon">
            <i className="fa-light fa-circle-plus text-xl"></i>
          </div>
          {/* <span className="custom-tooltip" style={{
            position: "absolute"
          }}>Thêm vào giỏ hàng</span> */}
        </div>
      ) : (
        <div className="cart_qty qty-box open "
          style={{
            position: "relative",
          }}
        >
          <div className="input-group"
            style={{
              // height: "48px",
              background: "#eee",
            }}
          >
            <button
              disabled={parseInt(quantity) <= 1 || isNaN(parseInt(quantity))}
              className="qty-left-minus tooltip-container"
              data-type="minus"
              data-field=""
              onClick={() => {
                const currentQty = parseInt(quantity);
                if (isNaN(currentQty)) return;

                const newQuantity = currentQty - 1;
                if (newQuantity >= 1) {
                  setQuantity(newQuantity.toString());
                  handleUpdateCart(newQuantity);
                }
              }}
            >
              <i className="fa-light fa-circle-minus"></i>
              {/* <span className="custom-tooltip" style={{
                position: "absolute"
              }}>Giảm số lượng</span> */}
            </button>
            <input
              onChange={(e) => {
                const inputValue = e.target.value;
                setQuantity(inputValue);

                const value = parseInt(inputValue);
                if (!isNaN(value) && value > 0) {
                  handleUpdateCart(value);
                }
              }}
              className="form-control input-number qty-input"
              placeholder="Số lượng"
              maxLength={3}
              type="text"
              name="quantity"
              data-max="-1"
              value={quantity}
            />

            <button
              disabled={isNaN(parseInt(quantity))}
              className="qty-right-plus tooltip-container"
              data-type="plus"
              data-field=""
              onClick={() => {
                const currentQty = parseInt(quantity);
                if (isNaN(currentQty)) return;
                const newQuantity = currentQty + 1;
                setQuantity(newQuantity.toString());
                handleUpdateCart(newQuantity);
              }}
              style={{
                background: "white"
              }}
            >
              <i className="fa-light fa-circle-plus"></i>
              {/* <span className="custom-tooltip" style={{
                position: "absolute"
              }}>Tăng số lượng</span> */}
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default VerticalProductButtonAddV2