import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner2() {
  return (
    <div className="home-contain">
      <ImageError width={415} height={333} src="/images/banner/2.jpg" className="bg-Image lazyload w-full h-full object-cover"

        alt="Bộ sưu tập hạt" />
      <div className="home-detail p-center-left home-p-sm ">
        <div>
          <h2 className="mt-0 text-danger">45% <span className="discount text-title">OFF</span></h2>
          <h3 className="theme-color">Bộ sưu tập hạt</h3>
          <p className="w-75">Chúng tôi cung cấp rau và trái cây hữu cơ</p>
          <a href="#" className="shop-button">Xem thêm <i className="fa-solid fa-right-long"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Banner2