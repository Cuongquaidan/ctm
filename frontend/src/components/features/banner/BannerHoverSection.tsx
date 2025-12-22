"use client"
import React from 'react'
import BannerHover, { BannerHoverProps } from '@/components/features/banner/BannerHover';
import CustomSection from '@/components/ui/CustomSection';
const banners: BannerHoverProps[] = [
  {
    src: "/images/banner/10.jpg",
    title: "Healthy, nutritious & Tasty Fruits & Veggies",
    description: "Save upto 50%",
  },
  {
    src: "/images/banner/14.jpg",
    title: "Fresh Bakery & Dairy Products",
    description: "Discount 30% for members",
  },
  {
    src: "/images/banner/15.jpg",
    title: "Organic Spices & Grocery Essentials",
    description: "Buy 1 Get 1 Free",
  },
];
function BannerHoverSection() {
  return (
    <div className="slider-1 slider-animate product-wrapper no-arrow">
      <CustomSection<BannerHoverProps>
        hasPagination={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
        }}
        items={banners}
        hasIcon={false}
        wrapperStyle={{
          border: "none"
        }}

        renderItem={(item, index) => (
          <BannerHover key={index} {...item} />
        )}
      ></CustomSection>
    </div>
  )
}

export default BannerHoverSection