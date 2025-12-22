import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner4() {
  return (
    <div className="wow fadeIn shrink-0" data-wow-daley="0s">
      <div className="banner-contain hover-effect">
        <ImageError width={376} height={231} src="/images/banner/7.jpg" className="bg-img lazyload w-100" alt="Mua càng nhiều, tiết kiệm càng lớn" />
        <div className="banner-details w-3/4">
          <div className="banner-box">
            <h6 className="text-danger">5% OFF</h6>
            <h5>Mua càng nhiều, tiết kiệm càng lớn</h5>
            <h6 className="text-content">Quả hạch & Đồ ăn nhẹ</h6>
          </div>
          <a href="#" className="banner-button text-white">Xem thêm <i className="fa-solid fa-right-long ms-2"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Banner4