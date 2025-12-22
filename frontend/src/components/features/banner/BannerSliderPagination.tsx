"use client"
import CustomSection from '@/components/ui/CustomSection'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function BannerSliderPagination({ items }: { items: string[] }) {
  return (
    <CustomSection<string>
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
    ></CustomSection>
  )
}

export default BannerSliderPagination