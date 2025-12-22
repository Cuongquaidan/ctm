"use client"

import { ShoppingCart } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useModalLogin } from '@/app/(sites)/layout';
import { useAuthContext } from '@/components/features/provider/AuthProvider';
import { updateCart } from '@/lib/api/cart';

function GroupCartAction({ productId, productPriceId, stock }: { productId: number, productPriceId: number, stock: number }) {
  const { setIsOpen } = useModalLogin();
  const { hasAuth, handleGetNumberOfStoreInCart, cart, handleGetCart } = useAuthContext();
  const [quantity, setQuantity] = useState<string>("1");
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (cart?.list) {
      const cartItem = cart.list.find(item => item.product_id === productId && item.product_price_id === productPriceId);
      if (cartItem && cartItem.quantity > 0) {
        setIsAdded(true);
        setQuantity(cartItem.quantity.toString());
      } else {
        setIsAdded(false);
        setQuantity("1");
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
    <div className="price-qty flex items-center"
      onClick={(e) => {
        e.stopPropagation();
        if (!hasAuth) {
          setIsOpen(true);
        }
      }}
    >
      {stock === 0 ? (
        <div className="counter-number">
          <div className="counter" style={{
            width: "unset",
            height: "unset",
            pointerEvents: "none",
            cursor: "not-allowed",
            opacity: 0.5
          }}>
            <span>Hết hàng</span>
          </div>
        </div>
      ) : (
        <>
          <div className="counter-number">
            <div className="counter" style={{
              width: "unset",
              height: "unset"
            }}>
              <div className="qty-left-minus p-3" data-type="minus" data-field=""
                onClick={() => {
                  const currentQty = parseInt(quantity);
                  if (isNaN(currentQty)) return;

                  const newQuantity = currentQty - 1;
                  if (newQuantity >= 1) {
                    setQuantity(newQuantity.toString());
                    if (isAdded) {
                      handleUpdateCart(newQuantity);
                    }
                  }
                }}
                style={{
                  opacity: parseInt(quantity) <= 1 || isNaN(parseInt(quantity)) ? 0.5 : 1,
                  cursor: parseInt(quantity) <= 1 || isNaN(parseInt(quantity)) ? "not-allowed" : "pointer"
                }}
              >
                <i className="fa-solid fa-minus"></i>
              </div>
              <input className="form-control input-number qty-input" type="text"
                name="quantity"
                value={quantity}
                maxLength={3}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setQuantity(inputValue);

                  const value = parseInt(inputValue);
                  if (!isNaN(value) && value > 0 && isAdded) {
                    handleUpdateCart(value);
                  }
                }}
              />
              <div className="qty-right-plus p-3" data-type="plus" data-field=""
                onClick={() => {
                  const currentQty = parseInt(quantity);
                  if (isNaN(currentQty)) return;
                  const newQuantity = currentQty + 1;
                  setQuantity(newQuantity.toString());
                  if (isAdded) {
                    handleUpdateCart(newQuantity);
                  }
                }}
                style={{
                  opacity: isNaN(parseInt(quantity)) ? 0.5 : 1,
                  cursor: isNaN(parseInt(quantity)) ? "not-allowed" : "pointer"
                }}
              >
                <i
                  style={{
                    width: "unset",
                    height: "unset"
                  }}
                  className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>

          <button className="buy-button buy-button-2 btn btn-cart"
            onClick={() => {
              if (hasAuth) {
                const currentQty = parseInt(quantity);
                if (!isNaN(currentQty) && currentQty > 0) {
                  handleUpdateCart(currentQty);
                  setIsAdded(true);
                }
              }
            }}
          >
            <ShoppingCart className="iconly-Buy icli text-white m-0" strokeWidth={1} />
          </button>
        </>
      )}
    </div>
  )
}

export default GroupCartAction