import React from 'react'
import Banner1V2 from './Banner1V2'
import Banner2V2 from './Banner2V2'
import Banner3V2 from './Banner3V2'
import BannerSlider from './BannerSliderV2'
import { getBannersByArr } from '@/lib/api/banner'

async function LayoutBanners1({ arr }: { arr: number[] }) {
  const banners = await getBannersByArr(arr);

  return (
    <>
      <div className="row g-4 w-full">
        <div className="col-xl-8 ratio_65 wow fadeIn "
          style={{
            aspectRatio: "100/65"
          }}
        >
          <Banner1V2 item={banners[0]} />
        </div>
        <div className="col-xl-4 ratio_65">
          <div className="row g-4">
            <div className="col-xl-12 col-md-6 wow fadeIn" data-wow-daley="0.1s">
              <Banner2V2 item={banners[1]} />
            </div>
            <div className="col-xl-12 col-md-6 wow fadeIn" data-wow-daley="0.15s">
              <Banner3V2 item={banners[2]}></Banner3V2>
            </div>
          </div>
        </div>
      </div>
      <BannerSlider items={banners.slice(3)} />
    </>
  )
}

export default LayoutBanners1