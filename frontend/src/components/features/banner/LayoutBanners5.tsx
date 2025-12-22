import React from 'react'
import { getBannersByArr } from '@/lib/api/banner'
import ImageError from '@/components/ui/ImageError';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import Link from 'next/link';

async function LayoutBanners5({ arr }: { arr: number[] }) {
  const banners = await getBannersByArr(arr);
  const banner1 = banners[0];
  const banner2 = banners[1];
  const banner3 = banners[2];
  const banner4 = banners[3];
  return (
    <>
      <div className="row g-4">
        <div className="col-xxl-6 col-md-8">
          <div className="home-contain h-100">
            <ImageError src={IMAGES_BASE_URL + "/" + banner1.image} alt={banner1.name || "honeynet"} width={780} height={534} className="img-fluid bg-img lazyload w-full" />
            <div className="home-detail home-width p-center-left ">
              <div>
                <h6 className="ls-expanded theme-color">{banner1.sale_name}</h6>
                <h1 className="fw-bold w-100">{banner1.sale_value}</h1>
                <h3 className="text-content fw-light">{banner1.name}</h3>
                <p className="d-sm-block d-none">{banner1.description}</p>
                <button
                  className="btn mt-sm-4 btn-2 theme-bg-color text-white mend-auto btn-2-animation"><Link href={banner1.button_link || "#"} style={{
                    color: "white",
                    fontStyle: "bold"
                  }}>
                    {banner1.button_name || "Shop Now"} <i className="fa-solid fa-arrow-right icon ms-2"></i>
                  </Link></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-3 col-md-4 ratio_medium d-md-block d-none">
          <div className="home-contain home-small h-100">
            <div className="h-100">
              <ImageError src={IMAGES_BASE_URL + "/" + banner2.image} alt={banner2.name || "honeynet"} width={375} height={534} className="img-fluid bg-img lazyload w-full pb-2" />
            </div>
            <div className="home-detail text-center p-top-center w-100 text-white">
              <div>
                <h4 className="fw-bold">{banner2.sale_name}</h4>
                <h5 className="text-center">{banner2.name}</h5>
                <button className="btn bg-white theme-color mt-3 home-button mx-auto btn-2"
                ><Link href={banner2.button_link || "#"} style={{
                  color: "white",
                  fontStyle: "bold"
                }}>
                    {banner2.button_name || "Shop Now"} <i className="fa-solid fa-arrow-right icon ms-2"></i>
                  </Link></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-3 ratio_65 d-xxl-block d-none" style={{ aspectRatio: '65/100' }}>
          <div className="row g-3">
            <div className="col-xxl-12 col-sm-6 pb-1.5">
              <div className="home-contain">
                <a href="shop-left-sidebar.html">
                  <ImageError src={IMAGES_BASE_URL + "/" + banner3.image} alt={banner3.name || "honeynet"} width={375} height={252} className="img-fluid bg-img lazyload w-full" />
                </a>
                <div className="home-detail text-white p-center text-center">
                  <div>
                    <h4 className="text-center">{banner3.sale_name}</h4>
                    <h5 className="text-center">{banner3.name}</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-12 col-sm-6 pt-1.5">
              <div className="home-contain">
                <a href="shop-left-sidebar.html">
                  <ImageError src={IMAGES_BASE_URL + "/" + banner4.image} alt={banner4.name || "honeynet"} width={375} height={252} className="img-fluid bg-img lazyload w-full" />
                </a>
                <div className="home-detail text-white w-50 p-center-left home-p-sm">
                  <div>
                    <h4 className="fw-bold">{banner4.sale_name}</h4>
                    <h5>{banner4.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LayoutBanners5