import { getAdvertisementById } from '@/lib/api/advertisement';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { AdvertisementT, BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

async function Advertisement7({ item, id }: { item?: AdvertisementT, id?: string }) {

  let data = item || id ? await getAdvertisementById(id as string) : undefined;
  return (
    <a href={data?.button_link} className="banner-contain hover-effect ">
      <ImageError width={500} height={300} src={IMAGES_BASE_URL + "/" + data?.image} className="bg-img lazyload w-full h-full object-cover" alt={data?.description || ""} />
      <div className="banner-details p-center-left p-4 ">
        <div>
          <h2 className="text-kaushan fw-normal text-danger">{data?.sale_value}</h2>
          <h3 className="mt-2 mb-2 theme-color">{data?.name || "Giá hot"}</h3>
          <h3 className="fw-normal product-name text-title">{data?.description}</h3>
        </div>
      </div>
    </a>
  )
}

export default Advertisement7