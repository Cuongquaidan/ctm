"use client"
import React from 'react'
import Banner4V2 from '@/components/features/banner/Banner4V2'
import Banner5V2 from '@/components/features/banner/Banner5V2'
import Banner6V2 from '@/components/features/banner/Banner6V2'
import Banner7V2 from '@/components/features/banner/Banner7V2'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { BannerT } from '@/types/common.types'

function BannerSliderV2({ items }: { items: BannerT[] }) {
  return (
    <div className="ratio_60 mt-4">
      <Swiper
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Banner4V2 item={items[0]}></Banner4V2>
        </SwiperSlide>
        <SwiperSlide>
          <Banner5V2 item={items[1]}  ></Banner5V2>
        </SwiperSlide>
        <SwiperSlide>
          <Banner6V2 item={items[2]}></Banner6V2>
        </SwiperSlide>
        <SwiperSlide>
          <Banner7V2 item={items[3]}></Banner7V2>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerSliderV2