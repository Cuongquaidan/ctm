import React from 'react'
import { getBannersByArr } from '@/lib/api/banner'
import ImageError from '@/components/ui/ImageError';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import Link from 'next/link';
import BannerSliderV2 from './BannerSliderV2';

async function LayoutBanners7({ arr }: { arr: number[] }) {
  const banners = await getBannersByArr(arr);
  const banner1 = banners[0];
  return (
    <>

      <div className="home-contain rounded-0 p-0 w-100"
        style={{
          aspectRatio: "1080/1080"
        }}
      >
        <ImageError src={IMAGES_BASE_URL + "/" + banner1.image}
          className="img-fluid bg-img    lazyload bg-top h-100 w-100" alt={banner1.name || "honeynet"} width={1920} height={1080} />
        <div className="home-detail p-center text-center home-overlay ">
          <div>
            <div className="content">
              <h1>{banner1.name}</h1>
              <h3>{banner1.description}</h3>
              <div className="search-box">
                <input type="search" className="form-control"
                  placeholder="I'm searching for..." />
                <i data-feather="search"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LayoutBanners7