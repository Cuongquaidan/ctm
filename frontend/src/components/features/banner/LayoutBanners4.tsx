import React from 'react'
import { getBannersByArr } from '@/lib/api/banner'
import ImageError from '@/components/ui/ImageError';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import Link from 'next/link';

async function LayoutBanners4({ arr }: { arr: number[] }) {
  const banners = await getBannersByArr(arr);
  const banner1 = banners[0];
  const banner2 = banners[1];
  return (
    <>
      <div className="row g-4">
        <div className="col-xl-9 col-lg-8">
          <div className="home-contain h-100">
            <ImageError fill src={banner1.image ? IMAGES_BASE_URL + "/" + banner1.image : "/images/logo.png"} className="bg-img    lazyload" alt={banner1.name || "honeynet"} />
            <div className="home-detail p-center-left w-75 position-relative mend-auto">
              <div>
                <h6>{banner1.sale_name} <span>{banner1.sale_value}</span></h6>
                <h1 className="w-75 text-uppercase poster-1">{banner1.name} <span
                  className="daily">Daily Needs</span></h1>
                <p className="w-58 d-none d-sm-block">{banner1.description}</p>
                <button
                  className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto"><Link href={banner1.button_link || "#"} style={{
                    color: "white",
                    fontStyle: "bold"
                  }}>
                    {banner1.button_name || "Shop Now"} <i className="fa-solid fa-arrow-right icon ms-2"></i>
                  </Link></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 d-lg-inline-block d-none ratio_156" style={{ aspectRatio: '156/100' }}>
          <div className="home-contain h-100">
            <ImageError fill src="/assets/eme2023/images/veg-2/banner/2.jpg" className="bg-img    lazyload" alt="honeynet" />
            <div className="home-detail p-top-left home-p-sm w-75">
              <div>
                <h2 className="mt-0 text-danger">{banner2.sale_name} <span className="discount text-title">{banner2.sale_value}</span>
                </h2>
                <h3 className="theme-color">{banner2.name}</h3>
                <h5 className="text-content">{banner2.description}</h5>
                <Link href={banner2.button_link || "#"} style={{
                  color: "white",
                  fontStyle: "bold"
                }}>
                  {banner2.button_name || "Shop Now"} <i className="fa-solid fa-arrow-right icon ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LayoutBanners4