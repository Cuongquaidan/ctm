import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner1() {
  return (
    <div className="home-contain h-100 ">
      <div className=""
        style={{
          backgroundImage: `url(/images/banner/1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          display: "block",
          height: "100%"
        }}
      >
        <ImageError width={1048.66} height={690} src={`/images/banner/1.jpg`} className="lazyload w-full h-full object-cover hidden"

          alt="Giao hàng tận nơi" />
      </div>
      <div className="home-detail p-center-left w-75">
        <div>
          <h6>Sale Name <span>Sale Value</span></h6>
          <h2 className="text-uppercase">Banner 1</h2>
          <p className="w-75 d-none d-sm-block">Description for Banner 1</p>
          <button className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto">Button Name<i className="fa-solid fa-right-long icon"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Banner1