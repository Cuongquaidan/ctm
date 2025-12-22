"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Banner4 from '@/components/features/banner/Banner4'
import Banner5 from '@/components/features/banner/Banner5'
import Banner6 from '@/components/features/banner/Banner6'
import Banner7 from '@/components/features/banner/Banner7'

function BannerSlider() {
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
        loop={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Banner4 ></Banner4>
        </SwiperSlide>
        <SwiperSlide>
          <Banner5  ></Banner5>
        </SwiperSlide>
        <SwiperSlide>
          <Banner6 ></Banner6>
        </SwiperSlide>
        <SwiperSlide>
          <Banner7 ></Banner7>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerSlider