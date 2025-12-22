import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner5() {
  return (
    <div className="wow fadeIn  shrink-0" data-wow-daley="0.05s">
      <div className="banner-contain hover-effect">
        <ImageError width={376} height={231} src="/images/banner/6.jpg" className="bg-img lazyload w-100" alt="Thịt hữu cơ đã chế biến" />
        <div className="banner-details w-3/4">
          <div className="banner-box">
            <h6 className="text-danger">5% Shop now</h6>
            <h5>Thịt hữu cơ đã chế biến</h5>
            <h6 className="text-content">Vận chuyện tận nơi</h6>
          </div>
          <a href="#" className="banner-button text-white">Xem thêm <i className="fa-solid fa-right-long ms-2"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Banner5