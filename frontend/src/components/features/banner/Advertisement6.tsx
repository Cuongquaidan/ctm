import { getAdvertisementById } from '@/lib/api/advertisement';
import { IMAGES_BASE_URL } from '@/lib/constants/constants'
import { AdvertisementT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

async function Advertisement6({ item, id }: { item?: AdvertisementT, id?: string }) {
  let data = item || id ? await getAdvertisementById(id as string) : undefined;
  return (
    <div className="banner-contain">
      <ImageError width={2000} height={200} src={`${IMAGES_BASE_URL}/${data?.image}`} className="bg-img lazyload w-full h-48 object-cover" alt={data?.name || "honeynet"} />
      <div className="banner-details p-center p-4 text-white text-center !top-1/2 !left-1/2 transform -translate-1/2">
        <div>
          <h3 className="lh-base fw-bold offer-text">{data?.name}</h3>
          <span className="coupon-code">{data?.sale_name}</span>
        </div>
      </div>
    </div>
  )
}

export default Advertisement6