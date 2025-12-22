

import BannerSlider from '@/components/features/banner/BannerSlider'
import SearchByCategoryHoverV2 from '@/components/features/category/SearchByCategoryHoverV2'
import AllProductsVertical2Action2ItemV3 from '@/components/features/product/section/AllProductsVertical2Action2ItemV3'
import VerticalProductHoverSectionV2 from '@/components/features/product/section/VerticalProductHoverSectionV2'
import DealHasCartButtonSectionV2 from '@/components/features/product/section/DealHasCartButtonSectionV2'
import SimpleDealHoverV2 from '@/components/features/product/section/SimpleDealHoverV2'
import ContactMail from '@/components/ui/ContactMail'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import NewsHasAuthorSectionV2 from '@/components/features/news/NewsHasAuthorSectionV2'
import HorizontalNItems4ActionsSection from '@/components/features/product/section/HorizontalNItems4ActionsSection'
import { data } from '@/assets/data/Home'
import HorizontalItemNoActionSection from '@/components/features/product/section/HorizontalItemNoActionSection'
import { getAllProducts } from '@/lib/api/product'
import { ProductT } from '@/types/common.types'

async function page() {
  let allProducts: ProductT[] = [];

  try {
    allProducts = await getAllProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <>
      <section className="home-section-2 home-section-small ">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xxl-6 col-md-8">
              <div className="home-contain h-100">
                <ImageError src="/assets/eme2023/images/veg-3/home/1.png" alt="Organic Fresh Fruit and Vegetables" width={780} height={534} className="img-fluid bg-img lazyload w-full" />
                <div className="home-detail home-width p-center-left ">
                  <div>
                    <h6 className="ls-expanded theme-color">ORGANIC</h6>
                    <h1 className="fw-bold w-100">100% Fresh</h1>
                    <h3 className="text-content fw-light">Fruit & Vegetables</h3>
                    <p className="d-sm-block d-none">Free shipping on all your order. we deliver you enjoy</p>
                    <button
                      className="btn mt-sm-4 btn-2 theme-bg-color text-white mend-auto btn-2-animation">Shop
                      Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-md-4 ratio_medium d-md-block d-none">
              <div className="home-contain home-small h-100">
                <div className="h-100">
                  <ImageError src="/assets/eme2023/images/veg-3/home/2.png" alt="Fresh & 100% Organic" width={375} height={534} className="img-fluid bg-img lazyload w-full pb-2" />
                </div>
                <div className="home-detail text-center p-top-center w-100 text-white">
                  <div>
                    <h4 className="fw-bold">Fresh & 100% Organic</h4>
                    <h5 className="text-center">farmer's market</h5>
                    <button className="btn bg-white theme-color mt-3 home-button mx-auto btn-2"
                    >Shop Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 ratio_65 d-xxl-block d-none" style={{ aspectRatio: '65/100' }}>
              <div className="row g-3">
                <div className="col-xxl-12 col-sm-6 pb-1.5">
                  <div className="home-contain">
                    <a href="shop-left-sidebar.html">
                      <ImageError src="/assets/eme2023/images/veg-3/home/3.png" alt="Organic Lifestyle" width={375} height={252} className="img-fluid bg-img lazyload w-full" />
                    </a>
                    <div className="home-detail text-white p-center text-center">
                      <div>
                        <h4 className="text-center">Organic Lifestyle</h4>
                        <h5 className="text-center">Best Weekend Sales</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-12 col-sm-6 pt-1.5">
                  <div className="home-contain">
                    <a href="shop-left-sidebar.html">
                      <ImageError src="/assets/eme2023/images/veg-3/home/4.png" alt="Safe food saves lives" width={375} height={252} className="img-fluid bg-img lazyload w-full" />
                    </a>
                    <div className="home-detail text-white w-50 p-center-left home-p-sm">
                      <div>
                        <h4 className="fw-bold">Safe food saves lives</h4>
                        <h5>Discount Offer</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <SearchByCategoryHoverV2></SearchByCategoryHoverV2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <SimpleDealHoverV2></SimpleDealHoverV2>
        </div>
      </section>
      <section className='deal-section'>
        <div className="container-fluid-lg ">
          <DealHasCartButtonSectionV2></DealHasCartButtonSectionV2>
        </div>
      </section>

      <section className="ratio_60" >
        <div className="container-fluid-lg">
          <div className="row g-3">

            <BannerSlider></BannerSlider>
          </div>

        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <VerticalProductHoverSectionV2
            title='FRUIT & VEGETABLES'
            description='A virtual assistant collects the products from your list'
            initialData={allProducts}
            n={2}
          ></VerticalProductHoverSectionV2>
        </div>
      </section>



      <section className="top-selling-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12">
              <HorizontalItemNoActionSection
                initialData={data}
                n={4}
                hasIcon={false}
                hasUnderline={true}
                title='Top sale'
                wrapperStyle={{
                  border: "none"
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  }
                }}
              ></HorizontalItemNoActionSection>
            </div>
            <div className="col-xxl-3  col-xl-4 col-lg-6 d-lg-block d-none">
              <HorizontalItemNoActionSection
                initialData={data}
                n={4}
                wrapperStyle={{
                  border: "none"
                }}
                hasIcon={false}
                hasUnderline={true}
                title='Trending'
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  }
                }}
              ></HorizontalItemNoActionSection>
            </div>
            <div className="col-xxl-3 col-xl-4 d-xl-block d-none">
              <HorizontalItemNoActionSection
                initialData={data}
                n={4}
                wrapperStyle={{
                  border: "none"
                }}
                hasIcon={false}
                hasUnderline={true}
                title='Recently Added'
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  }
                }}
              ></HorizontalItemNoActionSection>
            </div>
            <div className="col-xxl-3 d-xxl-block  d-none">
              <HorizontalItemNoActionSection
                initialData={data}
                n={4}
                hasIcon={false}
                hasUnderline={true}
                title='Top rated'
                wrapperStyle={{
                  border: "none"
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  }
                }}
              ></HorizontalItemNoActionSection>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <AllProductsVertical2Action2ItemV3></AllProductsVertical2Action2ItemV3>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <NewsHasAuthorSectionV2

          ></NewsHasAuthorSectionV2>
        </div>
      </section>
      <section className="newsletter-section section-b-space">
        <div className="container-fluid-lg">
          <ContactMail></ContactMail>
        </div>
      </section>
      <section className="banner-section">
        <div className="container-fluid-lg">
          <div className="row gy-xl-0 gy-3">
            <div className="col-xl-6">
              <div className="banner-contain-3 hover-effect">
                <ImageError src="/assets/eme2023/images/veg-3/banner/1.png" alt="Premium Fresh Vegetable & Daily Eating" layout="fill" objectFit="cover" />
                <div
                  className="banner-detail banner-details-dark text-white p-center-left w-50 position-relative mend-auto">
                  <div>
                    <h6 className="ls-expanded text-uppercase">Premium</h6>
                    <h3 className="mb-sm-3 mb-1">Fresh Vegetable & Daily Eating</h3>
                    <h4>Get Extra 50% Off</h4>
                    <button className="btn theme-color bg-white btn-md fw-bold mt-sm-3 mt-1 mend-auto"
                    >Shop Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="banner-contain-3 hover-effect">
                <ImageError src="/assets/eme2023/images/veg-3/banner/2.png" alt="100% Natural & Healthy Fruits" layout="fill" objectFit="cover" />

                <div className="banner-detail text-dark p-center-left w-50 position-relative mend-auto">
                  <div>
                    <h6 className=" ls-expanded text-uppercase">available</h6>
                    <h3 className="mb-sm-3 mb-1">100% Natural & Healthy Fruits</h3>
                    <h4 className="text-content">Weekend Special</h4>
                    <button className="btn theme-bg-color text-white btn-md fw-bold mt-sm-3 mt-1 mend-auto"
                    >Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section-2">
        <div className="container-fluid-lg">
          <div className="row gy-sm-5 gy-4">
            <div className="col-xxl-3 col-md-6">
              <HorizontalNItems4ActionsSection n={3} initialData={data} title='NEW PRODUCTS'></HorizontalNItems4ActionsSection>
            </div>
            <div className="col-xxl-3 col-md-6">
              <HorizontalNItems4ActionsSection n={3} initialData={data} title='FEATURED PRODUCTS'></HorizontalNItems4ActionsSection>

            </div>
            <div className="col-xxl-3 col-md-6">
              <HorizontalNItems4ActionsSection n={3} initialData={data} title='ON SALE PRODUCTS'></HorizontalNItems4ActionsSection>
            </div>
            <div className="col-xxl-3 col-md-6">
              <HorizontalNItems4ActionsSection n={3} initialData={data} title='TOP RATED PRODUCTS'></HorizontalNItems4ActionsSection>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default page