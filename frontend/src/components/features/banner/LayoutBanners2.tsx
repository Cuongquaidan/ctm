import React from 'react'
import { getBannersByArr } from '@/lib/api/banner'
import BannerSliderV2 from './BannerSliderV2';

async function LayoutBanners2({ arr }: { arr: number[] }) {
  const banners = await getBannersByArr(arr);
  return (
    <BannerSliderV2 items={banners}></BannerSliderV2>
  )
}

export default LayoutBanners2