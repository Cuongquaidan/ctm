import { IMAGES_BASE_URL } from '@/lib/constants/constants'
import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner4V2({ item }: { item: BannerT }) {

  return (
    <div className="wow fadeIn shrink-0" data-wow-daley="0s">
      <div className="banner-contain hover-effect">
        <ImageError width={376} height={231} src={`${IMAGES_BASE_URL}/${item.image}`} className="bg-img lazyload " alt={item.name} />
        <div className="banner-details w-3/4">
          <div className="banner-box">
            <h6 className="text-danger">{item.sale_value}</h6>
            <h5>{item.name}</h5>
            <h6 className="text-content">{item.description}</h6>
          </div>
          <a href="#" className="banner-button text-white">{item.button_name} <i className="fa-solid fa-right-long ms-2"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Banner4V2