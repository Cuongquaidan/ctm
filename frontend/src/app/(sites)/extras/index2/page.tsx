
import BannerSlider from '@/components/features/banner/BannerSlider'
import CustomerReview from '@/components/features/banner/CustomerReview'
import SliderCategory from '@/components/features/category/SliderCategory'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import { data } from '@/assets/data/Home'
import ColNHorizontalItemsSectionV2 from '@/components/features/product/section/HorizontalNItemsSectionV2'
import VerticalNItemV2 from '@/components/features/product/section/VerticalNItemV2'
import HorizontalItemNoActionSection from '@/components/features/product/section/HorizontalItemNoActionSection'

function page() {

  return (
    <>
      <section className="home-section home-section-ratio pt-2">
        <div className="container-fluid-lg">
          <div className="row g-4" >
            <div className="col-xxl-3 col-lg-4 col-sm-6 ratio_180 d-sm-block d-none"
              style={{
                aspectRatio: "180/100"
              }}
            >
              <div className="home-contain rounded h-100"

              >
                <div className=" w-full">
                  <ImageError fill src="/assets/eme2023/images/cake/banner/1.jpg" className="bg-img  lazyload" alt="honeynet" />
                </div>
                <div className="home-detail p-top-left home-p-medium">
                  <div>
                    <h6 className="text-danger mb-2 fw-bold">Fresh & Delicious</h6>
                    <h2 className="theme-color fw-bold">Fresh Bread</h2>
                    <p className="text-content d-md-block d-none">Bento box burritos cherry bomb pepper dark and
                      stormy with ginger..</p>
                    <a href="shop-left-sidebar.html" className="shop-button">Shop Now <i
                      className="fa-solid fa-right-long ms-2"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-lg-8 order-xxl-0 ratio_87"
              style={{
                aspectRatio: "87/100"
              }}
            >
              <div className="home-contain rounded   h-100">
                <div className="">
                  <ImageError fill src="/assets/eme2023/images/cake/banner/2.jpg" className="bg-img  lazyload" alt="honeynet" />
                </div>
                <div className="home-detail p-center-left home-p-sm">
                  <div>
                    <h6>Exclusive offer <span>30% Off</span></h6>
                    <h1 className="w-75 text-uppercase name-title poster-2 my-2">
                      we'll make <span className="name">handmade</span> your
                      <span className="name-2">sweet</span>
                    </h1>
                    <p className="w-50">Earl grey latte Thai basil curry grains alfalfa sprouts banana bread
                      ginger carrot...</p>
                    <button
                      className="btn text-white mt-xxl-4 mt-2 home-button mend-auto theme-bg-color">
                      Shop Now <i className="fa-solid fa-right-long icon ms-2"></i></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-4 col-sm-6 ratio_180 custom-ratio d-xxl-block d-lg-none d-sm-block d-none"
              style={{
                aspectRatio: "180/100"
              }}
            >
              <div className="home-contain rounded h-100">
                <ImageError fill src="/assets/eme2023/images/cake/banner/3.jpg" className="bg-img  lazyload" alt="honeynet" />
                <div className="home-detail p-top-left home-p-medium">
                  <div>
                    <h6 className="text-danger mb-2 fw-bold">Fresh & Delicious</h6>
                    <h2 className="theme-color fw-bold">Bakery Sweet</h2>
                    <p className="text-content d-md-block d-none">Peanut butter crunch chia seeds red parsley
                      basil overflowing..</p>
                    <a href="shop-left-sidebar.html" className="shop-button">Shop Now <i
                      className="fa-solid fa-right-long ms-2"></i></a>
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
              <SliderCategory></SliderCategory>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="banner-contain hover-effect">
                <ImageError width={2000} height={400} src="/assets/eme2023/images/cake/banner/4.jpg" className="bg-img lazyload" alt="honeynet" />
                <div className="banner-details p-center p-sm-4 p-3 text-white text-center">
                  <div>
                    <h3 className="lh-base fw-bold text-white">
                      Get $3 Cashback! Min Order of $30
                    </h3>
                    <h6 className="coupon-code code-2">Use Code : GROCERY1920</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className="row g-3">
            <div className="col-xxl-9">
              <VerticalNItemV2
                title="Giá Tốt Hôm Nay"
                initialData={data}
                startDate={new Date()}
                endDate={new Date(Date.now() + 24 * 60 * 60 * 1000)}
                n={2}

              ></VerticalNItemV2>
              <ColNHorizontalItemsSectionV2
                n={3}
                title="Tất Cả Sản Phẩm"
                initialData={data}
                startDate={new Date()}
                endDate={new Date(Date.now() + 24 * 60 * 60 * 1000)}
              ></ColNHorizontalItemsSectionV2>
              <VerticalNItemV2
                title="Sản Phẩm Bán Chạy"
                initialData={data}
                startDate={new Date()}
                endDate={new Date(Date.now() + 24 * 60 * 60 * 1000)}
                n={2}
              ></VerticalNItemV2>
            </div>
            <div className="col-xxl-3  d-xxl-block d-none">
              <div className="position-sticky top-0">
                <div className="ratio_209 rounded wow fadeIn" style={{ aspectRatio: '209/100' }}>
                  <div className="banner-contain-2 rounded hover-effect"
                    style={{
                      backgroundImage: "url(/assets/eme2023/images/cake/banner/10.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                    }}
                  >
                    <ImageError width={376} height={792} src="/assets/eme2023/images/cake/banner/10.jpg" className="bg-img w-100 lazyload" alt="honeynet" />
                    <div className="banner-detail p-top-left">
                      <div>
                        <h6 className="text-uppercase theme-color fw-500">seafood</h6>
                        <h3 className="text-uppercase">
                          special <span className="brand-name">brand</span>
                        </h3>
                        <p className="text-content fw-500 mt-3 lh-lg">Special offer on the discount very
                          hungry cake and sweets</p>

                        <div className="banner-detail-box banner-detail-box-2 mb-md-3 mb-1">
                          <h4 className="text-uppercase">up to</h4>
                          <h2 className="mt-2">50%</h2>
                          <h3 className="text-uppercase">off</h3>
                        </div>

                        <div>
                          <button
                            className="btn text-white btn-md mt-xxl-4 mt-2 home-button mend-auto theme-bg-color">Shop
                            Now<i className="fa-solid fa-right-long icon ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ratio_125 section-t-space wow fadeIn" style={{ aspectRatio: '125/100' }}>
                  <div className="banner-contain-2 rounded hover-effect"
                    style={{
                      backgroundImage: "url(/assets/eme2023/images/cake/banner/9.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                    }}
                  >
                    <ImageError width={375} height={650} src="/assets/eme2023/images/cake/banner/9.jpg" className="bg-img w-100  lazyload" alt="honeynet" />
                    <div className="banner-detail p-top-left">
                      <div>
                        <h6 className="text-uppercase theme-color fw-500">Freash Every Day!</h6>
                        <h3 className="text-pacifico mt-2">Delicioud <span className="theme-color">Bread</span>
                        </h3>
                        <p className="text-content fw-500 mt-3 w-75 mend-auto">Delicioud Bread and Brend new
                          fresh bread.</p>
                        <button
                          className="btn text-white btn-md mt-2 home-button mend-auto theme-bg-color">
                          Shop Now <i className="fa-solid fa-right-long icon ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <CustomerReview></CustomerReview>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="home-contain hover-effect"
                style={{
                  backgroundImage: "url(/assets/eme2023/images/cake/banner/11.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block"
                }}
              >
                <ImageError width={1600} height={415} src="/assets/eme2023/images/cake/banner/11.jpg" className="bg-img lazyload hidden" alt="honeynet" />
                <div className="home-detail p-center position-relative text-center">
                  <div>
                    <h3 className="text-danger text-uppercase fw-bold mb-0">
                      limited Time Offer
                    </h3>
                    <h2 className="theme-color text-pacifico fw-normal mb-0 super-sale text-center">
                      Super
                    </h2>
                    <h2 className="home-name text-uppercase">sale</h2>
                    <h3 className="text-pacifico fw-normal text-content text-center">
                      www.fastkart.com
                    </h3>
                    <ul className="social-icon">
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>

                      <li>
                        <a href="https://twitter.com/">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.whatsapp.com/">
                          <i className="fa-brands fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </>
  )
}

export default page