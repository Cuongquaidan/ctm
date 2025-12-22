import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner7() {
  return (
    <div className="wow fadeIn  shrink-0" data-wow-daley="0.15s">
      <div className="banner-contain hover-effect">
        <ImageError width={376} height={231} src="/images/banner/4.jpg" className="bg-img lazyload w-100" alt="Deal siêu hot cho sản phẩm mới" />
        <div className="banner-details w-3/4">
          <div className="banner-box">
            <h6 className="text-danger">5% OFF</h6>
            <h5>Deal siêu hot cho sản phẩm mới</h5>
            <h6 className="text-content">Trứng & Sữa</h6>
          </div>
          <a href="#" className="banner-button text-white">Xem thêm <i className="fa-solid fa-right-long ms-2"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Banner7