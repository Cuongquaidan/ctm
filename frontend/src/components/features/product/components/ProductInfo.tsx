"use client"
import { ProductT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'
import CustomRating from '@/components/features/product/components/CustomRating'
import { useAuthContext } from '@/components/features/provider/AuthProvider';
import { updateCart } from '@/lib/api/cart';
import CountdownTimer from '@/components/ui/CountdownTimer';
import TimingBox from '@/components/ui/TimingBox';
import OnlyLeftLine from '@/components/ui/OnlyLeftLine';
import VariantRectangleOptions from '@/components/ui/button/VariantRectangleOptions';
import VariantCircleOptions from '@/components/ui/button/VariantCircleOptions';
import VariantRadioOptions from '@/components/ui/button/VariantRadioOptions';
import VariantSelectOptions from '@/components/ui/button/VariantSelectOptions';
import { checkIsWithinTimeRange } from '@/lib/helper';

interface ProductInfoProps {
  product: ProductT;
}
const initialOptions = [
  {
    label: '1 KG',
    value: 'small',
    isDisabled: false
  },
  {
    label: '5 KG',
    value: 'medium',
    isDisabled: false
  },
  {
    label: '10 KG',
    value: 'large',
    isDisabled: true
  }
]
function ProductInfo({ product }: ProductInfoProps) {
  const { hasAuth, handleGetNumberOfItemsInWishlist, handleGetNumberOfStoreInCart, cart, handleGetCart } = useAuthContext();
  const [quantity, setQuantity] = useState<string>("0");
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (cart?.list) {
      const cartItem = cart.list.find(item => item.product_id === product.id && item.product_price_id === product.prices[0].product_price_id);
      if (cartItem && cartItem.quantity > 0) {
        setIsAdded(true);
        setQuantity(cartItem.quantity.toString());
      } else {
        setIsAdded(false);
        setQuantity("0");
      }
    }
  }, [cart, product.id, product.prices]);

  const handleUpdateCart = async (quantity: number) => {
    const res = await updateCart(product.id, product.prices[0].product_price_id, quantity);
    if (res) {
      // handleGetNumberOfStoreInCart();
      handleGetCart();
    }
  }

  return (
    <div className="right-box-contain product-detail productBox ">
      {product.prices[0].start_date && product.prices[0].end_date && (
        <div className="d-flex flex-col mb-3 gap-4">
          {product.prices[0].start_date && product.prices[0].end_date && (
            <>
              {/* <CountdownTimer title='Hurry up! Sales Ends In' startDate={new Date(product.prices[0].start_date)} endDate={new Date(product.prices[0].end_date)}></CountdownTimer> */}
              {/* <OnlyLeftLine quantityInStock={20} quantitySold={20}></OnlyLeftLine> */}
            </>

          )}
          {/* <div className="d-flex align-items-center theme-bg-color px-3 me-2 rounded w-100">
            <label className="text-white"><i className="fa-solid fa-bolt me-1"></i>Flash Sale</label>
          </div>
          <div className="offer-top mb-0">-{product.discount}%</div>

          <TimingBox startDate={new Date().toISOString()}></TimingBox> */}
        </div>
      )}
      <h2 className="name">{product.name}</h2>
      {/* <VariantRectangleOptions name='size1' onOptionSelect={() => { }} options={initialOptions} title='Weight'></VariantRectangleOptions>
      <VariantCircleOptions name='size2' onOptionSelect={() => { }} options={initialOptions} title='Size'></VariantCircleOptions>
      <VariantRadioOptions name='color' onOptionSelect={() => { }} options={initialOptions} title='Color'></VariantRadioOptions>
      <VariantSelectOptions onOptionSelect={() => { }} options={initialOptions} title='Volume' defaultValue="Choose volume"></VariantSelectOptions> */}
      <div className="price-rating">
        <div className="box-price">
          <span className="theme-color price mt-0">{product.prices[0].price}</span>                                    </div>
        <CustomRating numberOfRatings={product.review_total} rating={product.review_point}></CustomRating>
      </div>
      <div className="procuct-contain">
        <p></p>
      </div>
      <div className="product-packege">
        <div className="product-title">
          <h4>Đơn vị bán</h4>
        </div>
        <ul className="select-packege">
          <li>
            <a data-price="436" className="active">{product.prices[0].packageName}</a>
          </li>
        </ul>
      </div>
      <div className="note-box product-packege mt-3">
        <div className="row w-100">
          <div className="col-md-6">
            <div className="add-to-cart-box w-100 ">
              {
                product.prices[0].remaining_quantity === 0 ? (

                  <div className="btn btn-add-cart text-uppercase fw-bold">
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
                      background: "#f7f7f7"
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
                    style={{
                      height: "48px",
                    }}
                  >
                    <div className="input-group"
                      style={{
                        height: "48px",
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
                          background: "#f7f7f7"
                        }}
                      >
                        <i className="fa-light fa-circle-plus"></i>
                        <span className="custom-tooltip">Tăng số lượng</span>
                      </button>
                    </div>
                  </div>
                )}

            </div>
          </div>
          <div className="col-md-6">
            <a href="/customers/cart" className="btn btn-md bg-dark text-white w-100 mt-10px rounded-pill">Giỏ hàng</a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProductInfo