"use client"
import VariantSelectOptions from '@/components/ui/button/VariantSelectOptions'
import { ProductT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React, { useState } from 'react'
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
interface StickyProps {
  product: ProductT
}
function Sticky({ product }: StickyProps) {
  const [selectedOption, setSelectedOption] = useState(initialOptions[0]);
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <>
      <div className="sticky-bottom-cart">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="cart-content">
                <div className="product-image">
                  <ImageError width={300} height={300} src="/assets/eme2023/images/product/category/1.jpg" className="img-fluid lazyload object-cover"
                    alt={product.name} />
                  <div className="content">
                    <h5>{product.name}</h5>
                    <h6>{product.prices[0].price}{product.prices[0].discount_value > 0 && (<><del className="text-danger">{product.prices[0].price}</del><span>%{product.prices[0].discount_value} off</span></>)}</h6>
                  </div>
                </div>
                <div className="selection-section">
                  <div className="form-group mb-0">
                    <select id="input-state" className="form-control form-select"
                      value={selectedOption.value}
                      onChange={(e) => {
                        const selected = initialOptions.find(option => option.value === e.target.value);
                        if (selected) {
                          setSelectedOption(selected);
                        }
                      }}
                    >
                      {
                        initialOptions.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            disabled={option.isDisabled}
                          >
                            {option.label}
                          </option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="cart_qty qty-box product-qty m-0">
                    <div className="input-group h-100">
                      <button type="button" className="qty-left-minus">
                        <i className="fa fa-minus"></i>
                      </button>
                      <input className="form-control input-number qty-input" type="text" name="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                      <button type="button" className="qty-right-plus" >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="add-btn">
                  <a className="btn theme-bg-color text-white wishlist-btn" href="wishlist.html"><i
                    className="fa fa-bookmark"></i> Wishlist</a>
                  <a className="btn theme-bg-color text-white" href="cart.html"><i
                    className="fas fa-shopping-cart"></i> Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sticky