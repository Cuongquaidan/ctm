import { BannerT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

function Banner15() {
  return (
    <>       <div className="banner-contain hover-effect wow fadeIn">
      <ImageError width={3000} height={500} src="/images/banner/14.jpg" className="bg-img lazyload w-full h-full object-cover"
        style={{
          aspectRatio: "6 / 1"
        }}
        alt="Hoa củ quả" />
      <div className="banner-details p-center banner-b-space  text-center !top-1/2 !left-1/2 transform -translate-1/2" >
        <div>
          <h2 className="banner-title">Hoa củ quả</h2>
          <h5 className="lh-sm mx-auto mt-1 text-content">Giảm giá lên tới 5% OFF</h5>
          <button className="btn btn-animation btn-sm mx-auto mt-sm-3 mt-2">Xem thêm <i className="fa-solid fa-arrow-right icon"></i></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner15