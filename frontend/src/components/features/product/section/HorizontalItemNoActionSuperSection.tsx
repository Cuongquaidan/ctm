"use client"
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import HorizontalItemNoActionSection from './HorizontalItemNoActionSection'
import { data } from '@/assets/data/Home'

function HorizontalItemNoActionSuperSection() {
  return (
    <Swiper
      modules={[Navigation]}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }}
    >
      <SwiperSlide>
        <HorizontalItemNoActionSection
          initialData={data}
          n={4}
          hasIcon={false}
          hasUnderline={true}
          title='Top sale'
          wrapperStyle={{
            border: "none"
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0
            }
          }}
        ></HorizontalItemNoActionSection>
      </SwiperSlide>
      <SwiperSlide>
        <HorizontalItemNoActionSection
          initialData={data}
          n={4}
          wrapperStyle={{
            border: "none"
          }}
          hasIcon={false}
          hasUnderline={true}
          title='Recently Added'
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0
            }
          }}
        ></HorizontalItemNoActionSection>
      </SwiperSlide>
      <SwiperSlide>
        <HorizontalItemNoActionSection
          initialData={data}
          n={4}
          hasIcon={false}
          hasUnderline={true}
          title='Top rated'
          wrapperStyle={{
            border: "none"
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0
            }
          }}
        ></HorizontalItemNoActionSection>
      </SwiperSlide>
    </Swiper>
  )
}

export default HorizontalItemNoActionSuperSection