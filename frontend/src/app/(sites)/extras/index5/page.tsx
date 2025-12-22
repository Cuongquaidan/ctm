

import BannerSlider from '@/components/features/banner/BannerSlider'
import { getAllProducts } from '@/lib/api/product'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import SearchByCategoryHasActionV2 from '@/components/features/category/SearchByCategoryHasActionV2'
import BankSection from '@/components/features/voucher/BankSection'
import "swiper/css";
import DealSection from '@/components/features/product/section/DealSection'
import NewsSectionV2 from '@/components/features/news/NewsHasAuthorSectionV2'
import ServiceSection from '@/components/ui/ServiceSection'
import VerticalProductHoverSectionV3 from '@/components/features/product/section/VerticalProductHoverSectionV3'
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
                    <ImageError src="/assets/eme2023/images/grocery/banner/1.jpg" alt="Banner Image" layout="fill" />
                    <div className="home-detail home-big-space p-center-left home-overlay position-relative">
                      <div className="container-fluid-lg">
                        <div>
                          <h6 className="ls-expanded theme-color text-uppercase">Weekend Special offer
                          </h6>
                          <h1 className="heding-2">Premium Quality Dry Fruits</h1>
                          <h2 className="content-2">Dryfruits shopping made Easy</h2>
                          <h5 className="text-content">Fresh & Top Quality Dry Fruits are available here!
                          </h5>
                          <button
                            className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto">Shop Now <i
                              className="fa-solid fa-arrow-right icon"></i></button>
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
          <BannerSlider />
        </div>
      </section>
      <SearchByCategoryHasActionV2></SearchByCategoryHasActionV2>

      <section className="product-section-3">
        <div className="container-fluid-lg">
          <VerticalProductHoverSectionV3 title='Fruits & Vegetables'

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1600: {
                slidesPerView: 6,
                spaceBetween: 20
              },
              1800: {
                slidesPerView: 7,
                spaceBetween: 20
              }
            }}
            initialData={allProducts}
            n={1}
            wrapperStyle={{
              border: "none"
            }}
            classOfItem='border rounded'
            hasNavigation={true}
            hasIcon={false}
          ></VerticalProductHoverSectionV3>

        </div>
      </section>

      <section className="bank-section overflow-hidden">
        <div className="container-fluid-lg">
          <BankSection title="Bank Offers" hasIcon={false} ></BankSection>
        </div>
      </section>
      <section className="product-section product-section-3">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-4 col-lg-5 order-lg-2 pt-14">
              <DealSection></DealSection>
            </div>
            <div className="col-xxl-8 col-lg-7 order-lg-1">

              <VerticalProductHoverSectionV3 initialData={allProducts}
                title='Top Selling Items'
                n={2}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  },
                  1200: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  1400: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  },
                  1600: {
                    slidesPerView: 4,
                    spaceBetween: 20
                  },
                  1800: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  }
                }}
                hasIcon={false}
                wrapperStyle={{
                  border: "none"
                }}
                classOfItem='border rounded'
              ></VerticalProductHoverSectionV3>
            </div>
          </div>
        </div>
      </section>
      <section className="offer-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="offer-box hover-effect">
                <h2><span>FREE GIFT ANY ORDER</span> 70% oFF</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section-3">
        <div className="container-fluid-lg">
          <VerticalProductHoverSectionV3 title='Fruits & Vegetables'

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1600: {
                slidesPerView: 6,
                spaceBetween: 20
              },
              1800: {
                slidesPerView: 7,
                spaceBetween: 20
              }
            }}
            initialData={allProducts}
            n={1}
            wrapperStyle={{
              border: "none"
            }}
            classOfItem='border rounded'
            hasNavigation={true}
            hasIcon={false}
          ></VerticalProductHoverSectionV3>
        </div>
      </section>
      <section className="product-section-3">
        <div className="container-fluid-lg">
          <VerticalProductHoverSectionV3 title='Fruits & Vegetables'

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1600: {
                slidesPerView: 6,
                spaceBetween: 20
              },
              1800: {
                slidesPerView: 7,
                spaceBetween: 20
              }
            }}
            initialData={allProducts}
            n={1}
            wrapperStyle={{
              border: "none"
            }}
            classOfItem='border rounded'
            hasNavigation={true}
            hasIcon={false}
          ></VerticalProductHoverSectionV3>
        </div>
      </section>
      <section className="banner-section">
        <div className="container-fluid-lg">
          <div className="row gy-lg-0 gy-3">
            <div className="col-lg-6">
              <div className="banner-contain-3 hover-effect">
                <div>
                  <ImageError src="/assets/eme2023/images/grocery/banner/6.jpg" alt="Banner 6" fill />
                  <div
                    className="banner-detail banner-detail-2 text-dark p-center-left w-75 banner-p-sm position-relative mend-auto">
                    <div>
                      <h2 className="text-great fw-normal text-danger">50% special offer</h2>
                      <h3 className="mb-1 fw-bold">Chocolate Shake Back in <br className="d-sm-block d-none" />
                        Stock</h3>
                      <h4 className="text-content">Offer Of the Week!</h4>
                      <button className="btn btn-md theme-bg-color text-white mt-sm-3 mt-1 fw-bold mend-auto"
                      >Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner-contain-3 hover-effect">
                <ImageError src="/assets/eme2023/images/grocery/banner/7.jpg" alt="Banner 7" fill />
                <div
                  className="banner-detail banner-detail-2 text-dark p-center-left w-75 banner-p-sm position-relative mend-auto">
                  <div>
                    <h2 className="text-great fw-normal text-danger">Special hot sale</h2>
                    <h3 className="mb-1 fw-bold">Healthy & Fresh Cool <br /> Breakfast</h3>
                    <h4 className="text-content">Choose a Nutritious & Healthy Breakfast.</h4>
                    <button className="btn btn-md theme-bg-color text-white mt-sm-3 mt-1 fw-bold mend-auto"
                    >Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section-3">
        <div className="container-fluid-lg">
          <VerticalProductHoverSectionV3 title='Fruits & Vegetables'

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1600: {
                slidesPerView: 6,
                spaceBetween: 20
              },
              1800: {
                slidesPerView: 7,
                spaceBetween: 20
              }
            }}
            initialData={allProducts}
            n={1}
            wrapperStyle={{
              border: "none"
            }}
            classOfItem='border rounded'
            hasNavigation={true}
            hasIcon={false}
          ></VerticalProductHoverSectionV3>
        </div>
      </section>
      <section className="product-section-3">
        <div className="container-fluid-lg">
          <VerticalProductHoverSectionV3 title='Fruits & Vegetables'

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1600: {
                slidesPerView: 6,
                spaceBetween: 20
              },
              1800: {
                slidesPerView: 7,
                spaceBetween: 20
              }
            }}
            initialData={allProducts}
            n={1}
            wrapperStyle={{
              border: "none"
            }}
            classOfItem='border rounded'
            hasNavigation={true}
            hasIcon={false}
          ></VerticalProductHoverSectionV3>
        </div>
      </section>
      <section className="banner-section">
        <div className="container-fluid-lg">
          <div className="row gy-lg-0 gy-3">
            <div className="col-lg-8">
              <div className="banner-contain-3 h-100 pt-sm-5 hover-effect">
                <ImageError src="/assets/eme2023/images/grocery/banner/8.png" alt="Banner 8" fill />
                <div
                  className="banner-detail banner-p-sm p-center-right position-relative banner-minus-position banner-detail-deliver">
                  <div>
                    <h3 className="fw-bold banner-contain">Safe Delivery to the door</h3>
                    <h4 className="mb-sm-3 mb-2 delivery-contain">Make money on your terms. Anytime and anyhow.
                    </h4>
                    <ul className="banner-list">
                      <li>
                        <div className="delivery-box">
                          <div className="check-icon">
                            <i className="fa-solid fa-check"></i>
                          </div>

                          <div className="check-contain">
                            <h5>Get live order tracking</h5>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="delivery-box">
                          <div className="check-icon">
                            <i className="fa-solid fa-check"></i>
                          </div>

                          <div className="check-contain">
                            <h5>Get latest feature updates</h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <button className="btn theme-bg-color text-white mt-sm-4 mt-3 fw-bold">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="banner-contain-3 pt-lg-4 h-100 hover-effect">
                <a>
                  <ImageError src="/assets/eme2023/images/grocery/banner/9.jpg" alt="Banner 9" fill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section-3">
        <div className="container-fluid-lg">
          <VerticalProductHoverSectionV3 title='Fruits & Vegetables'

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1600: {
                slidesPerView: 6,
                spaceBetween: 20
              },
              1800: {
                slidesPerView: 7,
                spaceBetween: 20
              }
            }}
            initialData={allProducts}
            n={1}
            wrapperStyle={{
              border: "none"
            }}
            classOfItem='border rounded'
            hasNavigation={true}
            hasIcon={false}
          ></VerticalProductHoverSectionV3>
        </div>
      </section>
      <section className="product-section-3">
        <div className="container-fluid-lg">
          <VerticalProductHoverSectionV3 title='Fruits & Vegetables'

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1600: {
                slidesPerView: 6,
                spaceBetween: 20
              },
              1800: {
                slidesPerView: 7,
                spaceBetween: 20
              }
            }}
            initialData={allProducts}
            n={1}
            wrapperStyle={{
              border: "none"
            }}
            classOfItem='border rounded'
            hasNavigation={true}
            hasIcon={false}
          ></VerticalProductHoverSectionV3>
        </div>
      </section>
      <NewsSectionV2></NewsSectionV2>
      <ServiceSection></ServiceSection>
    </>
  )
}

export default page