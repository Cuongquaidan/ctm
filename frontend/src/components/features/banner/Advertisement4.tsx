import { getAdvertisementById } from '@/lib/api/advertisement';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { AdvertisementT, BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import Link from 'next/link';
import React from 'react'

async function Advertisement4({ item, id }: { item?: AdvertisementT; id?: string }) {
  let data = item || id ? await getAdvertisementById(id as string) : undefined;
  return (
    <div className="banner-contain hover-effect wow fadeIn ">
      <ImageError src={IMAGES_BASE_URL + "/" + data?.image} className="bg-img lazyload w-100 object-cover " alt={data?.description || "honeynet"} width={1000} height={600}
        style={{
          aspectRatio: "583/157",
          maxHeight: "160px",
        }}
      />
      <div className="banner-details p-center-left p-4">
        <div>
          <h3>{data?.sale_value}</h3>
          <h4 className="fw-normal theme-color mb-2">{data?.name}</h4>
          <button className="btn btn-animation btn-sm mend-auto">
            <Link href={data?.button_link || "#"} style={{
              color: "white",
              fontStyle: "bold"
            }}>
              {data?.button_name} <i className="fa-solid fa-arrow-right icon"></i>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Advertisement4