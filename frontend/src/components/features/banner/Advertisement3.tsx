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
async function Advertisement3({ item, id }: Advertisement1Props) {

  let data = item || id ? await getAdvertisementById(id as string) : undefined;
  return (
    <>       <div className="banner-contain hover-effect wow fadeIn">
      <ImageError width={3000} height={500} src={IMAGES_BASE_URL + "/" + data?.image} className="bg-img lazyload w-full h-full object-cover"
        style={{
          aspectRatio: "6 / 1"
        }}
        alt={data?.name || "honeynet"} />
      <div className="banner-details p-center banner-b-space  text-center !top-1/2 !left-1/2 transform -translate-1/2" >
        <div>
          <h2 className="banner-title">{data?.name}</h2>
          <h5 className="lh-sm mx-auto mt-1 text-content">{data?.description}</h5>
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

export default Advertisement3