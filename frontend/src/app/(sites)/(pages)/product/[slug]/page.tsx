import Banner16 from '@/components/features/banner/Banner16';
import ProductInfo from '@/components/features/product/components/ProductInfo';
import StoreBox from '@/components/features/store/StoreBox';
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome';
import { getProductByAlias } from '@/lib/api/product';

export const dynamic = 'force-dynamic';
import { getStoreById } from '@/lib/api/store';
import React from 'react'
import TabWrapper from '@/components/features/product/tab/TabWrapper';
import SlickSliderImagesVIP from '@/components/features/product/components/SlickSliderImagesVIP';
import "swiper/swiper.css"
import HorizontalNItems2ActionsSection from '@/components/features/product/section/HorizontalNItems2ActionsSection';
import { data } from '@/assets/data/Home';
import VerticalNItems from '@/components/features/product/section/VerticalNItems';
import { apiFetchSites, buildURIWithQueries } from '@/lib/api/api';

async function page({ params, searchParams }: {
  params: Promise<{ locale: string, slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { locale, slug } = await params
  const search = await searchParams
  const currentTab = (search.tab as string) || 'description'

  let product = null;
  let store = null;

  try {
    product = await getProductByAlias(slug);
  } catch (error) {
    console.error('Error fetching product:', error);
    return <div>Không thể tải thông tin sản phẩm</div>;
  }

  try {
    store = await apiFetchSites('/stores/detail/' + product.store_id);
  } catch (error) {
    console.error('Error fetching store:', error);
    store = null;
  }


  return (
    <>
      <BreadcrumbBackToHome current={product.name} title={product.name}></BreadcrumbBackToHome >

      {product && (
        <section className="product-section">
          <div className="container-fluid-lg">
            <div className="row mb-5">
              {/* <div className="col-12">
              <BannerSliderPagination items={product.gallery || []}></BannerSliderPagination>
            </div> */}
              <div className="col-xxl-9 col-xl-8 col-lg-7 wow fadeIn">
                <div className="row gy-4 gx-5">
                  <div className="col-xl-6 wow fadeIn">
                    <SlickSliderImagesVIP name={product.name} image={product.image} gallery={JSON.parse(product.gallery) || []} galleryZoom={JSON.parse(product.gallery) || []}></SlickSliderImagesVIP>
                  </div>
                  <div className="col-xl-6 wow fadeIn">
                    <ProductInfo product={product}></ProductInfo>

                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block wow fadeIn">
                <div className="right-sidebar-box">
                  <StoreBox store={store}></StoreBox>
                  <Banner16></Banner16>
                </div>
              </div>
            </div>
            <VerticalNItems
              url={`/products/${slug}`}
              title='Sản Phẩm Liên Quan'
              description='Khám Phá Những Sản Phẩm Tương Tự Được Chọn Lọc Dành Riêng Cho Bạn'
              hasPagination={true}
              n={1}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 0
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 0
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 0
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 0
                }

              }}

            ></VerticalNItems>
            <div className="row">
              <div className="col-xxl-9 col-xl-8 col-lg-7 wow fadeIn">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="product-section-box mt-0 mb-5">
                      <TabWrapper product={product} currentTab={currentTab}></TabWrapper>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block wow fadeIn product-section-2">
                <HorizontalNItems2ActionsSection
                  n={4}
                  title='San pham noi bat'
                  url='/products/getList?hotSh=1'
                ></HorizontalNItems2ActionsSection>
              </div>
            </div>
          </div>
        </section >
      )}
      {/* <Sticky product={product}></Sticky> */}
    </>
  )
}

export default page