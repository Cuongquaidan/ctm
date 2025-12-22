"use client"
import ImageError from '@/components/ui/ImageError'
import React, { HTMLAttributes, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { Image as ImageIcon } from "lucide-react"
import 'swiper/swiper.css';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
interface SlickSliderImagesVIPDetailProps {
  name: string;
  gallery: string[];
  galleryZoom?: string[];
  image?: string;
}
const NUMBER_OF_IMAGES_IN_VIEW = 4;
function SlickSliderImagesVIP({ name, image, gallery, galleryZoom }: SlickSliderImagesVIPDetailProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [fullScreenIndex, setFullScreenIndex] = useState<number>(-1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isZooming, setIsZooming] = useState<boolean>(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const swiperRef = useRef<any>(null);

  const handleClick = (originalIndex: number) => {
    if (!isDragging) {
      setActiveIndex(originalIndex);
      // swiperRef.current?.slideToLoop(originalIndex, 300);
    }
  };


  const handleMouseMoveOnMainImage = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
    setIsZooming(true);
  }



  return (
    <div className="product-left-box" >
      <div className="row g-2">
        <div className="col-12">
          <div
            className="product-main-1 no-arrow d-flex relative w-full overflow-hidden"
            // onMouseMove={handleMouseMoveOnMainImage}
            // onMouseLeave={() => setIsZooming(false)}
            style={{
              aspectRatio: 1 / 1,
              userSelect: 'none',
            }}
          >
            {
              image && gallery?.length === 0 && (
                <div
                  style={{
                    maxWidth: "100%",
                    transition: isDragging ? 'none' : 'transform 0.3s ease, opacity 0.3s ease',
                  }}
                  className={`slider-main shrink-0 absolute top-0 left-0 z-[998] `}>
                  <div className="slider-image product-image mx-auto relative w-full h-full">
                    <ImageError
                      draggable={false}
                      width={1000}
                      height={1000}
                      src={image !== null ? IMAGES_BASE_URL + "/" + image : '/images/logo.png'}
                      id={`img-0`}
                      className="img-fluid image_zoom_cls-0 lazyload object-contain cursor-crosshair"
                      alt={name}
                    />
                  </div>
                </div>

              )
            }
            {gallery && gallery?.map((img, originalIndex) => (
              <div key={originalIndex}>
                {
                  img && (
                    <div
                      style={{
                        maxWidth: "100%",
                        transition: isDragging ? 'none' : 'transform 0.3s ease, opacity 0.3s ease',
                      }}
                      className={`slider-main shrink-0 absolute top-0 left-0 z-[998] ${activeIndex === originalIndex ? "visible opacity-100" : "invisible opacity-0"}`}>
                      <div className="slider-image product-image mx-auto relative w-full h-full">
                        <ImageError
                          draggable={false}
                          width={1000}
                          height={1000}
                          src={img !== null ? IMAGES_BASE_URL + "/" + img : '/images/logo.png'}
                          id={`img-${originalIndex}`}
                          data-zoom-image={img}
                          className="img-fluid image_zoom_cls-0 lazyload object-contain cursor-crosshair"
                          alt={name}
                        />
                      </div>
                    </div>
                  )
                }
              </div>
            ))}
            {
              galleryZoom && galleryZoom.length > 0 && isZooming && (
                <div
                  className="absolute top-0 left-0 w-full h-full z-[999] transition-opacity duration-300 d-none d-lg-block"
                  style={{
                    backgroundImage: `url(${galleryZoom[activeIndex]})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '200%',
                  }}
                />
              )
            }
          </div>
        </div>
        <div className="col-12 mt-4 d-none d-lg-block">
          <div
            className="bottom-slider-image left-slider no-arrow slick-top d-flex gap-4 overflow-hidden w-100"
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
          >
            <Swiper
              className='w-100'
              modules={[Navigation]}
              slidesPerView={NUMBER_OF_IMAGES_IN_VIEW}
              spaceBetween={12}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                // swiper.slideToLoop(0, 0);
              }}
              loop={true}
              centeredSlides={false}
              onSlideChange={(s) => {
                setActiveIndex(s.realIndex);
              }}
              onMouseDown={() => {
                setIsDragging(true);
              }}
              onMouseUp={() => {
                setIsDragging(false);
              }}


            >
              {gallery && gallery.map((img, originalIndex) => {
                return (
                  <SwiperSlide key={originalIndex} onClick={() => handleClick(originalIndex)} >
                    <div
                      className={`gallery-slider shrink-0 ${activeIndex === originalIndex ? "active shadow-2xl" : ""}`}
                    >
                      <div className="sidebar-image">
                        <ImageError draggable={false} width={1000} height={1000} src={img !== null ? IMAGES_BASE_URL + (img[0] !== "/" ? "/" : "") + img : '/images/logo.png'} className="img-fluid lazyload object-contain" alt={name} />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* <div
            className="bottom-slider-image left-slider no-arrow slick-top d-flex gap-4 overflow-hidden w-100"
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
          >
            <div className='w-full'>
              <label className="d-flex items-center gap-2 mb-2 text-sm font-medium text-muted-foreground">
                <ImageIcon className="w-4 h-4" />
                Hình ảnh ({gallery.length})
              </label>
              <div className="grid grid-cols-4 gap-2">
                {gallery.slice(0, 4).map((src, idx) => (
                  <div
                    key={src}
                    className="relative overflow-hidden transition-opacity rounded-lg cursor-pointer aspect-square hover:opacity-90"
                    onClick={() => setFullScreenIndex(idx)}
                  >
                    <ImageError
                      src={src}
                      alt={`Ảnh ${idx + 1}`}
                      fill
                      className="object-cover block"
                    />
                    {idx === 3 && gallery && gallery.length > 4 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                        <span className="text-2xl font-semibold text-white">
                          +{gallery.length - 4}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Lightbox
                index={fullScreenIndex}
                slides={gallery.map((src) => ({ src }))}
                open={fullScreenIndex >= 0}
                close={() => setFullScreenIndex(-1)}
              />
            </div>
          </div> */}
        </div>
        <div className="col-12 mt-2 d-block d-lg-none">
          {gallery.length > 0 && gallery.map((src, idx) => (
            <div onClick={() => {

              setActiveIndex(idx)
            }
            }
              key={src + idx}
              className={`slider-image product-image mx-auto relative cursor-pointer ${activeIndex === idx ? " active shadow-2xl" : ""}`}>
              <ImageError
                draggable={false}
                width={1000}
                height={1000}
                src={src !== null ? IMAGES_BASE_URL + (src[0] !== "/" ? "/" : "") + src : '/images/logo.png'}
                id={`img-${idx}`}
                data-zoom-image={src}
                className="img-fluid image_zoom_cls-0 lazyload object-contain cursor-crosshair w-100 "
                style={{
                  aspectRatio: "1/1"
                }}
                alt={name}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="row g-2">
        <div className="col-xxl-10 col-lg-12 col-md-10 relative order-xxl-2 order-lg-1 order-md-2"
          style={{
            backgroundColor: "#f7f3f3",
            borderRadius: "8px",
          }}
          onMouseMove={handleMouseMoveOnMainImage}
          onMouseLeave={() => setIsZooming(false)}
        >
          {gallery?.map((img, originalIndex) => (
            <div key={originalIndex}
              style={{
                maxWidth: "100%",
                transition: isDragging ? 'none' : 'transform 0.3s ease, opacity 0.3s ease',
              }}
              className={`slider-main shrink-0 absolute top-0 left-0 z-[998] ${activeIndex === originalIndex ? "visible opacity-100" : "invisible opacity-0"}`}>
              <div className="slider-image product-image mx-auto relative w-full h-full">
                <ImageError
                  draggable={false}
                  width={1000}
                  height={1000}
                  src={img}
                  id={`img-${originalIndex}`}
                  data-zoom-image={img}
                  className="img-fluid image_zoom_cls-0 lazyload  cursor-crosshair object-contain"
                  alt={name}
                />
              </div>
            </div>
          ))}
          {
            galleryZoom && galleryZoom.length > 0 && isZooming && (
              <div
                className="absolute top-0 left-0 w-full h-full z-[999] transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${galleryZoom[activeIndex]})`,
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '200%',
                }}
              />
            )
          }
        </div>
        <div className="col-xxl-2 col-lg-12 col-md-2 order-xxl-1 order-lg-2 order-md-1">
          <div className="left-slider-image-2 left-slider no-arrow slick-top">
            <div className="product-main-2 no-arrow"
              style={{
                maxHeight: "70vh"
              }}
            >
              <Swiper
                modules={[Navigation]}
                slidesPerView={NUMBER_OF_IMAGES_IN_VIEW}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  swiper.slideToLoop(0, 0);
                }}
                direction='vertical'
                loop={true}
                centeredSlides={false}
                onSlideChange={(s) => {
                  setActiveIndex(s.realIndex);
                }}
                onMouseDown={() => {
                  setIsDragging(true);
                }}
                onMouseUp={() => {
                  setIsDragging(false);
                }}
                style={{
                  maxHeight: "50vh"
                }}

              >
                {gallery.map((img, originalIndex) => {
                  return (
                    <SwiperSlide key={originalIndex} onClick={() => handleClick(originalIndex)}>
                      <div
                        className={`gallery-slider shrink-0 ${activeIndex === originalIndex ? "active shadow-2xl" : ""}`}
                      >
                        <div className="sidebar-image">
                          <ImageError draggable={false} width={1000} height={1000} src={img} className="img-fluid lazyload object-contain" alt={name} />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default SlickSliderImagesVIP