import { formatCurrency } from '@/lib/helper'
import { ProductT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

interface ProductReviewProps {
  product: ProductT;
  onOpen: () => void;
}

function ProductReview({ product, onOpen }: ProductReviewProps) {
  return (
    <div className="col-xxl-3 col-lg-4 col-md-6 col-6 productBox">
      <div className="product-box-3 h-100 bg-white">
        <div className="product-header">
          <div className="product-image">
            <a href={`https://ca-ctm.systems.com.vn/${product.alias}.html`}>
              <ImageError width={900} height={400} src={product.image} data-src={product.image} className="img-fluid lazyload" alt={product.name} /></a>
          </div>
        </div>
        <div className="product-footer">
          <div className="product-detail">
            <div>
              <a href={`https://ca-ctm.systems.com.vn/${product.alias}.html`}>
                <div className="name">{product.name}</div>
              </a>
            </div>
            <div>
              <div className="box-price mb-3">
                <span className="fw-600 theme-color price mt-0">{formatCurrency(product.prices[0].expense)}</span>
              </div>
              <a className="btn btn-animation btn-sm py-1 text-white"
                onClick={
                  () => {
                    onOpen()
                  }
                }
              >Đánh giá<i className="fa-solid fa-star icon"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductReview