import { IMAGES_BASE_URL } from '@/lib/constants/constants'
import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner3V2({ item }: { item: BannerT }) {

  return (
    <div className="home-contain">
      <ImageError width={415} height={333} src={`${IMAGES_BASE_URL}/${item.image}`} className="bg-Image lazyload w-full h-full object-cover"


        alt={item.name} />
      <div className="home-detail p-center-left home-p-sm ">
        <div>
          <h3 className="mt-0 theme-color fw-bold">{item.name}</h3>
          <h4 className="text-danger">{item.sale_name}</h4>
          <p className="organic">{item.description}</p>
          <a href="#" className="shop-button">{item.button_name} <i className="fa-solid fa-right-long"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Banner3V2