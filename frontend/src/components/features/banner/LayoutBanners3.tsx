import React from 'react'
import { getBannersByArr } from '@/lib/api/banner'
import BannerSliderV2 from './BannerSliderV2';
import ImageError from '@/components/ui/ImageError';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import Link from 'next/link';

async function LayoutBanners3({ arr }: { arr: number[] }) {
  const banners = await getBannersByArr(arr);
  const banner1 = banners[0];
  const banner2 = banners[1];
  const banner3 = banners[2];
  return (
    <>
      <div className="row g-4" >
        <div className="col-xxl-3 col-lg-4 col-sm-6 ratio_180 d-sm-block d-none"
          style={{
            aspectRatio: "180/100"
          }}
        >
          <div className="home-contain rounded h-100"

          >
            <div className=" w-full">
              <ImageError fill src={banner1.image ? IMAGES_BASE_URL + "/" + banner1.image : "/images/logo.png"} className="bg-img  lazyload" alt={banner1.name || "honeynet"} />
            </div>
            <div className="home-detail p-top-left home-p-medium">
              <div>
                <h6 className="text-danger mb-2 fw-bold">{banner1.sale_name}</h6>
                <h2 className="theme-color fw-bold">{banner1.name}</h2>
                <p className="text-content d-md-block d-none">{banner1.description}</p>
                <Link href={banner1.button_link || "#"} className="shop-button">{banner1.button_name || "Shop Now"} <i
                  className="fa-solid fa-right-long ms-2"></i></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-6 col-lg-8 order-xxl-0 ratio_87"
          style={{
            aspectRatio: "87/100"
          }}
        >
          <div className="home-contain rounded   h-100">
            <div className="">
              <ImageError fill src={banner2.image ? IMAGES_BASE_URL + "/" + banner2.image : "/images/logo.png"} className="bg-img  lazyload" alt={banner2.name || "honeynet"} />
            </div>
            <div className="home-detail p-center-left home-p-sm">
              <div>
                <h6>{banner2.sale_name}</h6>
                <h1 className="w-75 text-uppercase name-title poster-2 my-2">
                  {banner2.name}
                </h1>
                <p className="w-50">{banner2.description}</p>
                <button
                  className="btn text-white mt-xxl-4 mt-2 home-button mend-auto theme-bg-color">

                  <Link href={banner2.button_link || "#"} style={{
                    color: "white",
                    fontStyle: "bold"
                  }}>
                    {banner2.button_name || "Shop Now"} <i className="fa-solid fa-arrow-right icon ms-2"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-3 col-xl-4 col-sm-6 ratio_180 custom-ratio d-xxl-block d-lg-none d-sm-block d-none"
          style={{
            aspectRatio: "180/100"
          }}
        >
          <div className="home-contain rounded h-100">
            <ImageError fill src={banner3.image ? IMAGES_BASE_URL + "/" + banner3.image : "/images/logo.png"} className="bg-img  lazyload" alt={banner3.name || "honeynet"} />
            <div className="home-detail p-top-left home-p-medium">
              <div>
                <h6 className="text-danger mb-2 fw-bold">{banner3.sale_name}</h6>
                <h2 className="theme-color fw-bold">{banner3.name}</h2>
                <p className="text-content d-md-block d-none">{banner3.description}</p>
                <a href={banner3.button_link || "#"} className="shop-button">{banner3.button_name || "Shop Now"} <i
                  className="fa-solid fa-right-long ms-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LayoutBanners3