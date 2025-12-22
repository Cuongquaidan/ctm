import React from 'react'
import CustomRating from '@/components/features/product/components/CustomRating'
import { StoreT } from '@/types/common.types'

interface StoreInfoProps {
  store: StoreT;
}

function StoreInfo({ store }: StoreInfoProps) {
  return (
    <div className="vendor-name p-center-left">
      <div>
        <div className="vendor-list-name">
          <h3>{store.name}</h3>
          <div className="product-rating vendor-rating">
            <CustomRating rating={store.review_point} numberOfRatings={store.review_total} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreInfo