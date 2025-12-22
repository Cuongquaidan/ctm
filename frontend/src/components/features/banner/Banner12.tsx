import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner12() {
  return (
    <div className="banner-contain">
      <ImageError width={2000} height={200} src={`/images/banner/15.jpg`} className="bg-img lazyload w-full h-48 object-cover" alt="Banner 12" />
      <div className="banner-details p-center p-4 text-white text-center !top-1/2 !left-1/2 transform -translate-1/2">
        <div>
          <h3 className="lh-base fw-bold offer-text">Banner 12</h3>
          <span className="coupon-code">Description for Banner 12</span>
        </div>
      </div>
    </div>
  )
}

export default Banner12