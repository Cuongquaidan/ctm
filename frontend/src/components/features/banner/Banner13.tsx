import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner13() {
  return (
    <a href="shop-left-sidebar.html" className="banner-contain hover-effect ">
      <ImageError width={500} height={300} src="/images/banner/13.jpg" className="bg-img lazyload w-full h-full object-cover" alt="Giá hot" />
      <div className="banner-details p-center-left p-4 ">
        <div>
          <h2 className="text-kaushan fw-normal text-danger">20% Off </h2>
          <h3 className="mt-2 mb-2 theme-color">Giá hot</h3>
          <h3 className="fw-normal product-name text-title">Đồ uống</h3>
        </div>
      </div>
    </a>
  )
}

export default Banner13