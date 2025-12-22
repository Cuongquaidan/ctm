import React from 'react'
import ImageError from '@/components/ui/ImageError'
import { BannerT } from '@/types/common.types'

function Banner16() {
  return (
    <div className="ratio_60 mt-4">
      <div className="home-contain">
        <ImageError width={600} height={400} src="/assets/eme2023/images/vegetable/banner/6.jpg" className="bg-img lazyload" alt="honneynet" />
        <div className="home-detail p-top-left home-p-medium">
          <div>
            <h6 className="text-yellow home-banner">Seafood</h6>
            <h3 className="text-uppercase fw-normal"><span className="theme-color fw-bold">Freshes</span> Products</h3>
            <h3 className="fw-light">every hour</h3>
            <button className="btn btn-animation btn-md fw-bold mend-auto">Shop Now <i className="fa-solid fa-arrow-right icon"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner16