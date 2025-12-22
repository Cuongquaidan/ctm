import { getAdvertisementById } from '@/lib/api/advertisement';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { AdvertisementT, BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import Link from 'next/link';
import React from 'react'
interface Advertisement1Props {
  item?: AdvertisementT;
  id?: string;
}
async function Advertisement2({ item, id }: Advertisement1Props) {

  let data = item || id ? await getAdvertisementById(id as string) : undefined;
  return (
    <>       <div className="banner-contain hover-effect"
      style={{
        height: "270px",
        backgroundImage: `url(${IMAGES_BASE_URL + "/" + data?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        display: "block",
      }}
    >
      <ImageError src={IMAGES_BASE_URL + "/" + data?.image} className='bg-img d-none lazyload' layout="fill" alt={data?.name || "honeynet"} />
      <div className="banner-details p-center-left p-4">
        <div>
          <h2 className="text-kaushan fw-normal theme-color">{data?.name}</h2>
          <h3 className="mt-2 mb-3">{data?.sale_name}</h3>
          <p className="text-content banner-text">{data?.description}</p>
          <button className="btn btn-animation btn-sm mx-auto mt-sm-3 mt-2">
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
    </>
  )
}

export default Advertisement2