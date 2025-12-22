"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { apiFetchFullUrl } from '@/lib/api/api';
import SectionHeaderV2 from '@/components/ui/SectionHeaderV2';
import SectionHeaderV3 from './SectionHeaderV3';
import { CategoryT, CategoryTV0 } from '@/types/common.types';
interface CustomSectionV3Props<T> {
  items?: T[],
  url?: string,
  title?: string,
  description?: string,
  link?: string,
  startDate?: Date,
  endDate?: Date,
  hasNavigation?: boolean,
  hasIcon?: boolean,
  slidesStep?: number,
  hasPagination?: boolean,
  wrapperStyle?: React.CSSProperties,
  autoplay?: boolean,
  delay?: number,
  isCentered?: boolean,
  hasUnderline?: boolean,
  categories?: {
    name: string;
    link: string;
    image: string;
    slug: string;
  }[] | CategoryTV0[],
  isLoop?: boolean,
  breakpoints?: {
    [width: number]: {
      slidesPerView: number;
      spaceBetween?: number;
    };
  };

  renderItem: (item: T, index: number) => React.ReactNode
}

function CustomSectionV3<T>({
  items,
  title,
  description,
  link,
  renderItem,
  hasNavigation = false,
  hasIcon,
  slidesStep,
  hasPagination = false,
  startDate,
  endDate,
  url,
  categories,
  wrapperStyle,
  autoplay,
  delay,
  isCentered,
  isLoop,
  hasUnderline = false,
  breakpoints
}: CustomSectionV3Props<T>) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [data, setData] = useState<T[]>(items || []);
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState<number>(9);

  useEffect(() => {
    if (items && items.length > 0) {
      setData(items);
      return;
    }
    if (url) {
      const handleFetchData = async () => {
        const resdata = await apiFetchFullUrl(url);
        setData(resdata);
      };
      handleFetchData();
    }
  }, [items, url]);
  const swiperRef = useRef<any>(null);
  const handleNext = () => {
    const swiper = swiperRef.current
    if (!swiper) return

    if (isLoop) {
      swiper.slideNext()
      return
    }

    const total = (swiper.slides && swiper.slides.length) || data.length || 0
    const view = swiper.params?.slidesPerView || 6
    const step = slidesStep || 1

    const lastIndex = Math.max(0, total - view)
    const nextIndex = swiper.activeIndex + step
    const target = nextIndex > lastIndex ? 0 : nextIndex
    swiper.slideTo(target)
  }
  const handlePrev = () => {
    const swiper = swiperRef.current

    if (!swiper) return

    if (isLoop) {
      swiper.slidePrev()
      return
    }

    const total = (swiper.slides && swiper.slides.length) || 0
    const view = swiper.params?.slidesPerView || 6
    const step = slidesStep || 1

    const lastIndex = Math.max(0, total - view)

    const prevIndex = swiper.activeIndex - step
    const target = prevIndex < 0 ? lastIndex : prevIndex
    swiper.slideTo(target)
  }
  const handleDotClick = (index: number) => {
    const swiper = swiperRef.current
    if (!swiper) return
    setCurrentSlide(index)
    const step = slidesStep || 1
    const target = index * step

    if (isLoop) {
      swiper.slideToLoop(target)
    } else {
      swiper.slideTo(target)
    }
  }
  return (
    <>
      <SectionHeaderV3
        title={title}
        hasUnderline={hasUnderline}
        description={description}
        hasIcon={hasIcon}
        categories={categories?.slice(0, 5)}
      ></SectionHeaderV3>

      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0 }}
        className="section-b-space hasNavigation" >
        {hasNavigation && (
          <div className="group-button-navigation">
            <button className="custom-swiper-button-prev custom-swiper-button" onClick={handlePrev}>
              <i className="fa fa-chevron-left"></i>
            </button>
            <button className="custom-swiper-button-next custom-swiper-button" onClick={handleNext}>
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        )}
        <div >
          <div className=" rounded-2xl" style={{
            border: "1px solid #e2e8f0",
            ...wrapperStyle
          }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={breakpoints || {
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 5
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 0
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 0
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 0
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 0
                },
                1600: {
                  slidesPerView: 5,
                  spaceBetween: 0
                },
                1800: {
                  slidesPerView: 6,
                  spaceBetween: 0
                }
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
                setCurrentSlidesPerView(swiper.params.slidesPerView as number)
              }}
              autoplay={autoplay ? { delay: delay || 3000 } : false}
              loop={isLoop || false}
              centeredSlides={isCentered || false}
              onSlideChange={(swiper) => {
                const index = isLoop ? (Math.floor(swiper.realIndex % (items?.length || 1))) : swiper.activeIndex
                setCurrentSlide(index)
                setCurrentSlidesPerView(swiper.params.slidesPerView as number)
              }}

            >
              {/* {isLoop && data?.map((item, index) => (
                <SwiperSlide key={"fake1" + index}>
                  {renderItem(item, index)}
                </SwiperSlide>
              ))} */}
              {data?.map((item, index) => (
                <SwiperSlide key={index}>
                  {renderItem(item, index)}
                </SwiperSlide>
              ))}
              {isLoop && data?.map((item, index) => (
                <SwiperSlide key={"fake2" + index}>
                  {renderItem(item, index)}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {hasPagination && (
          <div className='product-wrapper'>
            <ul className="slick-dots">
              {Array.from({
                length: isLoop
                  ? Math.ceil(data.length / (slidesStep || 1))
                  : Math.ceil((data.length - currentSlidesPerView + 1) / (slidesStep || 1))
              }).map((_, index) => (
                <li key={index} className={index === currentSlide ? 'slick-active' : ''}>
                  <button onClick={() => handleDotClick(index)}>{index + 1}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

    </>
  )
}

export default CustomSectionV3