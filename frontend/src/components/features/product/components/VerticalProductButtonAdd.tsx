"use client"

import { useModalLogin } from '@/app/(sites)/layout';
import { useAuthContext } from '@/components/features/provider/AuthProvider';
import { updateCart } from '@/lib/api/cart';
import React, { useState, useEffect } from 'react'

function VerticalProductButtonAdd({ productId, productPriceId, stock }: { productId: number, productPriceId: number, stock: number }) {
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
      // handleGetNumberOfStoreInCart();
      handleGetCart();
    }
  }

  return (
    <div className="add-to-cart-box w-100 relative mx-auto  mt-3"
      style={{
        zIndex: 1000,
        height: "43px",
        background: "#eee",
        // maxWidth: "233px",
        marginTop: "0px",
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
          className="btn btn-add-cart addcart-button tooltip-container "
          style={{
            pointerEvents: "none",
            cursor: "not-allowed",
            background: "#eee",
            marginTop: "0px",
          }}
        >
          Hết hàng

          <span className="custom-tooltip">Opps no</span>
        </div>
      ) : !isAdded ? (
        <div
          className="btn btn-add-cart addcart-button tooltip-container"
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
          }}
        >
          Thêm
          <div className="add-icon">
            <i className="fa-light fa-circle-plus"></i>
          </div>
          <span className="custom-tooltip">Thêm vào giỏ hàng</span>
        </div>
      ) : (
        <div className="cart_qty qty-box open "

        >
          <div className="input-group"
            style={{
              // height: "48px",
              background: "#eee",
            }}
          >
            <button
              disabled={parseInt(quantity) <= 0 || isNaN(parseInt(quantity))}
              className="qty-left-minus tooltip-container"
              data-type="minus"
              data-field=""
              onClick={() => {
                const currentQty = parseInt(quantity);
                if (isNaN(currentQty)) return;

                const newQuantity = currentQty - 1;
                if (newQuantity >= 0) {
                  setQuantity(newQuantity.toString());
                  handleUpdateCart(newQuantity);
                }
              }}
            >
              <i className="fa-light fa-circle-minus"></i>
              <span className="custom-tooltip">Giảm số lượng</span>
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
              <span className="custom-tooltip">Tăng số lượng</span>
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default VerticalProductButtonAdd