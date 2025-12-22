import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner9() {
  return (
    <div className=" section-b-space">
      <div className="ratio_medium wow fadeIn">
        <div className="home-contain hover-effect">
          <ImageError width={400} height={1000} src="/images/banner/11.jpg" className="img-fluid lazyload w-full h-full object-cover"

            style={{
              aspectRatio: " 2/ 5"
            }}
            alt="Organic FRESH VEGETABLES" />
          <div className="home-detail p-top-left home-p-medium">
            <div>
              <h4 className="text-yellow home-banner">Organic</h4>
              <h2 className="text-uppercase fw-normal mb-0 theme-color">FRESH</h2>
              <h2 className="text-uppercase fw-normal text-title">VEGETABLES</h2>
              <p className="mb-3">Super Offer to 50%</p>
              <button className="btn btn-animation btn-sm mend-auto">Xem thêm <i className="fa-solid fa-arrow-right icon"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner9