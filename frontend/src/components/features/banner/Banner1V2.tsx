import { IMAGES_BASE_URL } from '@/lib/constants/constants'
import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner1V2({ item }: { item: BannerT }) {

  return (
    <div className="home-contain h-100 ">
      <div className=""
        style={{
          backgroundImage: `url(${IMAGES_BASE_URL}/${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          display: "block",
          height: "100%"
        }}
      >
        <ImageError width={1048.66} height={690} src={`${IMAGES_BASE_URL}/${item.image}`} className="lazyload w-full h-full object-cover hidden"

          alt="Giao hàng tận nơi" />
      </div>
      <div className="home-detail p-center-left w-75">
        <div>
          <h6>{item.sale_name} <span>{item.sale_value}</span></h6>
          <h2 className="text-uppercase">{item.name}</h2>
          <p className="w-75 d-none d-sm-block">{item.description}</p>
          <button className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto">{item.button_name}<i className="fa-solid fa-right-long icon"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Banner1V2