import { getAdvertisementById } from '@/lib/api/advertisement';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { AdvertisementT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import Link from 'next/link';
import React from 'react'

interface Advertisement1Props {
  item?: AdvertisementT;
  id?: string;
}

async function Advertisement1({ item, id }: Advertisement1Props) {

  let data = item || id ? await getAdvertisementById(id as string) : undefined;
  return (
    <div className=" section-b-space">
      <div className="ratio_medium wow fadeIn">
        <div className="home-contain hover-effect">
          <ImageError width={400} height={1000} src={`${IMAGES_BASE_URL}/${data?.image}`} className="img-fluid lazyload w-full h-full object-cover"

            style={{
              aspectRatio: " 2/ 5"
            }}
            alt={data?.name || 'honeynet'} />
          <div className="home-detail p-top-left home-p-medium">
            <div>
              <h4 className="text-yellow home-banner">{data?.sale_name}</h4>
              <h2 className="text-uppercase fw-normal mb-0 theme-color">{data?.name}</h2>
              <h2 className="text-uppercase fw-normal text-title">{data?.sale_value}</h2>
              <p className="mb-3">{data?.description}</p>
              <button className="btn btn-animation btn-sm mend-auto"> <Link href={data?.button_link || "#"} style={{
                color: "white",
                fontStyle: "bold"
              }}>
                {data?.button_name} <i className="fa-solid fa-arrow-right icon"></i>
              </Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advertisement1