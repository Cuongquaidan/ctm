import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner3() {
  return (
    <div className="home-contain">
      <ImageError width={415} height={333} src="/images/banner/3.jpg" className="bg-Image lazyload w-full h-full object-cover"


        alt="Thực phẩm bổ dưỡng" />
      <div className="home-detail p-center-left home-p-sm ">
        <div>
          <h3 className="mt-0 theme-color fw-bold">Thực phẩm bổ dưỡng</h3>
          <h4 className="text-danger">Thị trường hữu cơ</h4>
          <p className="organic">Bắt đầu mua sắm hàng ngày của bạn với một số thực phẩm hữu cơ</p>
          <a href="#" className="shop-button">Xem thêm <i className="fa-solid fa-right-long"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Banner3