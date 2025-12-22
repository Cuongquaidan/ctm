import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner10() {
  return (
    <div className="banner-contain hover-effect wow fadeIn ">
      <ImageError src="/images/banner/9.jpg" className="bg-img lazyload h-[160px] w-100 object-cover " alt="Thịt tươi ngon" width={1000} height={600} />
      <div className="banner-details p-center-left p-4">
        <div>
          <h3>50% Offer</h3>
          <h4 className="fw-normal theme-color mb-2">Thịt tươi ngon</h4>
          <button className="btn btn-animation btn-sm mend-auto">Xem thêm <i className="fa-solid fa-arrow-right icon"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Banner10