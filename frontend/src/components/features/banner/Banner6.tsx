import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner6() {
  return (
    <div className="wow fadeIn  shrink-0" data-wow-daley="0.1s">
      <div className="banner-contain hover-effect">
        <ImageError width={376} height={231} src="/images/banner/5.jpg" className="bg-img lazyload w-100" alt="Deal siêu hot" />
        <div className="banner-details w-3/4  ">
          <div className="banner-box">
            <h6 className="text-danger">5% OFF</h6>
            <h5>Deal siêu hot</h5>
            <h6 className="text-content">Hoa quả tươi</h6>
          </div>
          <a href="#" className="banner-button text-white">Xem thêm <i className="fa-solid fa-right-long ms-2"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Banner6