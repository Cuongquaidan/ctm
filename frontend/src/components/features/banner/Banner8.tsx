import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner8() {
  return (
    <div className=" section-b-space">
      <div className="ratio_156 section-t-space wow fadeIn">
        <div className="home-contain hover-effect">
          <ImageError width={400} height={600} src="/images/banner/8.jpg" className="bg-img lazyload w-full h-full object-cover"
            style={{
              aspectRatio: "2 / 3"
            }}
            alt="Hải sản Tươi sống" />
          <div className="home-detail p-top-left home-p-medium">
            <div>
              <h3 className="text-uppercase fw-normal theme-color fw-bold">Hải sản Tươi sống</h3>
              <button className="btn btn-animation btn-sm mend-auto">Xem thêm <i className="fa-solid fa-arrow-right icon"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner8