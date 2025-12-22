import { StoreAdT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function SimpleDealHoverItem({ item }: { item: StoreAdT }) {
  return (
    <div className="offer-banner hover-effect" style={{
      backgroundImage: `url(${item.imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      display: "block",
      width: "100%",
      aspectRatio: 85 / 54
    }}>
      <ImageError src={item.imageUrl} className="img-fluid bg-img d-none lazyload"
        alt={item.title} fill />
      <div className="banner-detail">
        <h5 className="theme-color">{item.title}</h5>
        <h6>{item.subtitle}</h6>
      </div>
      <div className="offer-box">
        <button
          className="btn-category btn theme-bg-color text-white">View Offer</button>
      </div>
    </div>
  )
}

export default SimpleDealHoverItem