"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function BannerSliderPaginationV2({ items }: { items: string[] }) {
  return (
    <CustomSectionV2<string>
      items={items}
      hasPagination={true}
      autoplay={true}
      hasIcon={false}
      delay={2500}
      isLoop={true}
      isCentered={true}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
        1280: { slidesPerView: 4, spaceBetween: 30 },
      }}
      renderItem={(item, index) => (
        <div className="product-slider-image h-[350px]" key={index}>
          <ImageError width={1000} height={1000} src={item} alt="banner image"
            className="img-fluid   h-100 object-cover
            " />
        </div>
      )}
    ></CustomSectionV2>
  )
}

export default BannerSliderPaginationV2
