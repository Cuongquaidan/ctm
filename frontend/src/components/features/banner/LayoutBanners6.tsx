import React from 'react'
import { getBannersByArr } from '@/lib/api/banner'
import ImageError from '@/components/ui/ImageError';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import Link from 'next/link';
import BannerSliderV2 from './BannerSliderV2';

async function LayoutBanners6({ arr }: { arr: number[] }) {
  const banners = await getBannersByArr(arr);
  const banner1 = banners[0];
  const banner2 = banners[1];
  const banner3 = banners[2];
  const banner4 = banners[3];
  const banner5 = banners[4];
  return (
    <>
      <section className="home-section-2 home-section-bg pt-0 overflow-hidden"
        style={{
          position: "relative",
          zIndex: 0
        }}
      >
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="slider-animate">
                <div>
                  <div className="home-contain rounded-0 p-0">
                    <ImageError src={IMAGES_BASE_URL + "/" + banner1.image} alt={banner1.name || "honeynet"} layout="fill" />
                    <div className="home-detail home-big-space p-center-left home-overlay position-relative">
                      <div className="container-fluid-lg">
                        <div>
                          <h6 className="ls-expanded theme-color text-uppercase">{banner1.name}
                          </h6>
                          <h1 className="heding-2">{banner1.name}</h1>
                          <h2 className="content-2">{banner1.sale_value}</h2>
                          <h5 className="text-content">{banner1.description}
                          </h5>
                          <button
                            className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto"><Link href={banner1.button_link || "#"} style={{
                              color: "white",
                              fontStyle: "bold"
                            }}>
                              {banner1.button_name || "Shop Now"} <i className="fa-solid fa-arrow-right icon ms-2"></i>
                            </Link></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="container-fluid-lg">
          <BannerSliderV2 items={[banner2, banner3, banner4, banner5]} />
        </div>
      </section>
    </>
  )
}

export default LayoutBanners6