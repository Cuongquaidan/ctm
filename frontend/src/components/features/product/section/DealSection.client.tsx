"use client"
import { ProductT } from '@/types/common.types';
import ImageError from '@/components/ui/ImageError';
import Link from 'next/link';
import React, { useRef } from 'react'
import WishListButton from '@/components/ui/button/WishListButton'
import CustomRating from '@/components/features/product/components/CustomRating'
import CountdownTimer from '@/components/ui/CountdownTimer'
import { formatCurrency } from '@/lib/helper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
function DealSectionClient({ items }: { items: ProductT[] }) {
  const swiperRef = useRef<any>(null);
  const handleNext = () => {
    const swiper = swiperRef.current
    if (!swiper) return
    const total = (swiper.slides && swiper.slides.length) || items.length || 0
    const view = swiper.params?.slidesPerView || 1
    const step = 1

    const lastIndex = Math.max(0, total - view)

    const nextIndex = swiper.activeIndex + step
    const target = nextIndex > lastIndex ? 0 : nextIndex
    swiper.slideTo(target)
  }
  const handlePrev = () => {
    const swiper = swiperRef.current

    if (!swiper) return
    const total = (swiper.slides && swiper.slides.length) || 0
    const view = swiper.params?.slidesPerView || 6
    const step = 1

    const lastIndex = Math.max(0, total - view)

    const prevIndex = swiper.activeIndex - step
    const target = prevIndex < 0 ? lastIndex : prevIndex
    swiper.slideTo(target)
  }
  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <button className="custom-swiper-button-prev custom-swiper-button"
          style={{
            position: "absolute",
            top: "40%",
            left: "10px",
            transform: "translateY(-50%)",
            zIndex: 99
          }}
          onClick={handlePrev}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button
          style={{
            position: "absolute",
            top: "40%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 99
          }}
          className="custom-swiper-button-next custom-swiper-button" onClick={handleNext}>
          <i className="fa fa-chevron-right"></i>
        </button>
        {
          items?.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product-bg-image wow fadeInUp"
                style={{
                  backgroundImage: "url(/assets/eme2023/images/grocery/bg.jpg)"
                }}
              >
                <div className="product-title product-warning">
                  <h2 className='text-center'>Special Offer</h2>
                </div>

                <div className="product-box-4 product-box-3 rounded-0">
                  <div className="deal-box">
                    <div className="circle-box w-20 h-20">
                      <div className="shape-circle w-16 h-16">
                        <ImageError width={200} height={200} src="/assets/eme2023/images/grocery/circle.svg" className="w-full lazyload object-contain" alt="honey net" />
                        <div className="shape-text">
                          <h6>Hot <br /> Deal</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="top-selling-slider product-arrow">

                    <div className="product-image w-full">
                      <Link href={`/product/${product.alias}`} className='block w-full'>
                        <ImageError width={700} height={2100} src={product.image}
                          className="img-fluid product-image lazyload w-full " alt={product.name} />
                      </Link>

                      <ul className="option">
                        <li >

                          <Link href={`/product/${product.alias}`} className='tooltip-container'>

                            <p className='custom-tooltip'>Detail</p>
                            <i className="fa fa-eye"  >
                            </i>
                          </Link>
                        </li>

                        <li
                        >
                          <a className='tooltip-container'>
                            <p className='custom-tooltip'>Compare</p>
                            <i className="fa fa-refresh" ></i>
                          </a>
                        </li>


                        <WishListButton productId={product.id} color='var(--theme-color)' hasTooltip={true} />

                      </ul>
                    </div>

                    <div className="product-detail text-center">

                      <CustomRating numberOfRatings={4} rating={4} isCenter={true} ></CustomRating>
                      <a href={`product/${product.alias}`}>
                        <h3 className="name w-100 mx-auto text-center">{product.name}</h3>
                      </a>
                      <h3 className="price theme-color d-flex justify-content-center">
                        {formatCurrency(((product.prices[0].expense)))}<del className="delete-price">{formatCurrency(product.prices[0].price)}</del>
                      </h3>
                      <div className="progress custom-progressbar">
                        <div className="progress-bar" style={{ width: "79%" }} role="progressbar"></div>
                      </div>
                      <h5 className="text-content">Solid : <span className="text-dark">30 items</span>
                        <span className="ms-auto text-content">Hurry up offer end in</span></h5>
                      <div className='d-flex justify-center'>
                        {
                          product.prices[0].start_date && product.prices[0].end_date && (
                            <CountdownTimer startDate={product.prices[0].start_date} endDate={product.prices[0].end_date} hasText={false}></CountdownTimer>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  )
}

export default DealSectionClient