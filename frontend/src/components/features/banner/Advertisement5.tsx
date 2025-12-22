import { getAdvertisementById } from '@/lib/api/advertisement';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { AdvertisementT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import Link from 'next/link';
import React from 'react'

async function Advertisement5({ item, id }: { item?: AdvertisementT; id?: string }) {

  let data = item || id ? await getAdvertisementById(id as string) : undefined;
  return (
    <div className=" section-b-space">
      <div className="ratio_156 section-t-space wow fadeIn">
        <div className="home-contain hover-effect">
          <ImageError width={400} height={600} src={`${IMAGES_BASE_URL}/${data?.image}`} className="bg-img lazyload w-full h-full object-cover"
            style={{
              aspectRatio: "2 / 3"
            }}
            alt={data?.name || 'honeynet'} />
          <div className="home-detail p-top-left home-p-medium">
            <div>
              <h3 className="text-uppercase fw-normal theme-color fw-bold">{data?.name}</h3>
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
      </div>
    </div>
  )
}

export default Advertisement5