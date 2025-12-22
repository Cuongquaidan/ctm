import { StoreT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

interface StoreReviewProps {
  store: StoreT;
  onOpen: () => void;
}

function StoreReview({ store, onOpen }: StoreReviewProps) {
  return (
    <div className="col-xxl-3 col-lg-4 col-md-6 col-6 productBox" >
      <div className="product-box-3 h-100 bg-white d-flex flex-column">
        <div className="product-header">
          <div className="product-image">
            <a href={`https://ca-ctm.systems.com.vn/html`}>
              <ImageError width={300} height={200} src={store.image} data-src={store.image} className="img-fluid lazyload" alt={store.name} /></a>
          </div>
        </div>
        <div className="product-footer d-flex flex-column flex-grow-1">
          <div className="product-detail d-flex flex-column h-100">
            <div className="flex-grow-1 mb-2">
              <a href={`https://ca-ctm.systems.com.vn/.html`}>
                <div className="name">{store.name}</div>
              </a>
            </div>
            <div className="mt-auto">
              <a className="btn btn-animation btn-sm py-1 text-white" onClick={onOpen}>Đánh giá<i className="fa-solid fa-star icon"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreReview