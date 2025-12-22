"use client"
import TrashIconButton from '@/components/ui/button/TrashIconButton'
import { removeItems, updateCart } from '@/lib/api/cart'
import { IMAGES_BASE_URL } from '@/lib/constants/constants'
import { formatCurrency } from '@/lib/helper'
import { CartItemItemT, CartItemT, VoucherStoreT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import { useAuthContext } from '../provider/AuthProvider'

interface CartTableItemProps {
  item: CartItemT;
  onCheck: (cartId: number) => void;
  refresh: () => void;
}

function CartTableItem({
  item,
  onCheck,
  refresh,
}: CartTableItemProps) {
  const { handleGetCart } = useAuthContext();
  const handleUpdateCart = async (quantity: number) => {
    const res = await updateCart(item.product_id, item.product_price_id, quantity);
    if (res) {
      await refresh();
    }

  }

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      await handleUpdateCart(value);
      await refresh();
    }
    return;
  };
  const handleDeleteItem = async () => {
    const res = await removeItems([item.id]);

    if (res) {
      await refresh();
      await handleGetCart();
    }
  }
  return (
    <>
      {/* <hr className="my-0" style={{ "backgroundColor": "#000", "height": "2px" }} /> */}
      <div className="w-100 productBox" data-id="834" data-price="446" data-seller="">
        <div className="d-flex align-items-center py-2">
          <div className="p-0" style={{ "width": "24px" }}>
            <div className="form-check p-0 m-0">
              <input
                name="prchecked[]"
                className="checkbox_animated check-box me-0 cartCheck"
                type="checkbox"
                checked={item.is_order === 1}
                onChange={(e) => onCheck(item.id)}
              />
            </div>
          </div>
          <div className="px-3 product-detail flex-1">
            <div className="d-flex align-items-center">
              <a href={`/product/${item.product.alias}`} className="product-image me-3">
                <ImageError src={item.image ? IMAGES_BASE_URL + "/" + item.image : "/images/default.jpg"} className="object-fit-contain lazyload w-45 h-45" alt={item.product.meta_description || item.product.name || "honeynet"} width={200} height={200} />
              </a>
              <div>
                <div className="name mb-0">
                  <a className="text-black" href={`/product/${item.product.alias}`}>{item.product.name}</a>
                </div>
                <h5 className="box-price d-none">
                  <span className="theme-color price mt-0">{formatCurrency(item.price)} </span>
                </h5>
              </div>
            </div>
          </div>
          <div className="px-3 unit-price text-center w-xl-250 w-md-150">
            <h5 className="sold text-content">
              <span className="theme-color price mt-0">{formatCurrency(item.price)} /{item.package_name}</span>
            </h5>
          </div>
          <div className="px-3 quantity text-center w-xl-250 w-md-150">
            <div className="quantity-price mx-auto">
              <div className="cart_qty">
                <div className="d-flex mw-130 mx-auto">
                  <button type="button" className="btn qty-left-minus h-45 w-45 p-0" data-type="minus" data-field=""
                    onClick={() => handleUpdateCart(item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <i className="fa-light fa-circle-minus text-secondary"></i>
                  </button>
                  <input
                    onChange={(e) => handleInputChange(e)}
                    className="input-number qty-input px-0 flex-1 form-control text-center border-0 bg-transparent" maxLength={3} type="number" name="quantity" value={(item.quantity)} data-max="-1" />
                  <button type="button" className="btn qty-right-plus h-45 w-45 p-0" data-type="plus" data-field=""
                    onClick={() => handleUpdateCart(item.quantity + 1)}

                  >
                    <i className="fa-light fa-circle-plus text-theme"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 subtotal text-center w-xl-250 w-md-150">
            <h5 className="text-danger">{formatCurrency(item.price * item.quantity)} </h5>
          </div>
          <div className="save-remove p-0 align-middle" style={{ "width": "26px" }}>
            <TrashIconButton handleConfirm={handleDeleteItem} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartTableItem