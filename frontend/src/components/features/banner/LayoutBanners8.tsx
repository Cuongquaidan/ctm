import React from 'react'
import { getBannersByArr } from '@/lib/api/banner'
import ImageError from '@/components/ui/ImageError';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import Link from 'next/link';
import BannerSliderV2 from './BannerSliderV2';

async function LayoutBanners8({ arr }: { arr: number[] }) {
  const banners = await getBannersByArr(arr);
  const banner1 = banners[0];
  return (
    <>
      <div className="home-contain rounded-0 p-0"
        style={{
          backgroundImage: `url(${IMAGES_BASE_URL + "/" + banner1.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          display: "block",
          height: "100%"
        }}
      >

        <ImageError src={IMAGES_BASE_URL + "/" + banner1.image} className='bg-img lazyload d-none' layout="fill" alt={banner1.name || "Banner Image"} />
        <div className="home-detail home-big-space p-center-left home-overlay position-relative">
          <div className="container-fluid-lg">
            <div>
              <h6 className="ls-expanded text-uppercase text-danger">{banner1.name}
              </h6>
              <h1 className="heding-2">{banner1.sale_name}</h1>
              <h5 className="text-content">{banner1.description}
              </h5>
              <button
                className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto"><Link href={banner1.button_link || "#"} style={{
                  color: "white",
                  fontStyle: "bold"
                }}>
                  {banner1.button_name || "Shop Now"} <i className="fa-solid fa-arrow-right icon ms-2"></i>
                </Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LayoutBanners8