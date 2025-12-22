
import { getAllProducts } from '@/lib/api/product'
import ImageError from '@/components/ui/ImageError'
import "swiper/css";
import { CategoryTV0, ProductT } from '@/types/common.types'
import ContactMail from '@/components/ui/ContactMail';
import SliderCategory from '@/components/features/category/SliderCategory';
import SimpleVerticalProductHoverSectionV2 from '@/components/features/product/section/SimpleVerticalProductHoverSectionV2';
import HorizontalNItemsSectionV2 from '@/components/features/product/section/HorizontalNItemsSectionV2';
import HorizontalItemNoActionSection from '@/components/features/product/section/HorizontalItemNoActionSection';
import { data } from '@/assets/data/Home';

const categories: CategoryTV0[] = [
  {
    name: "Decorations",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/images/furniture/icon/decorations.svg",
    slug: "decorations",
  },
  {
    name: "Bed linen",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/images/furniture/icon/pillows.svg",
    slug: "bed-linen",
  },
  {
    name: "Cushions",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/images/furniture/icon/cushions.svg",
    slug: "cushions",
  },
  {
    name: "Blankets",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/images/furniture/icon/blankets.svg",
    slug: "blankets",
  },
  {
    name: "Giftwraps",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/images/furniture/icon/gift.svg",
    slug: "giftwraps",
  },
  {
    name: "Sleepwear",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/images/furniture/icon/sleepware.svg",
    slug: "sleepwear",
  },
  {
    name: "Room Fragrance",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/images/furniture/icon/room-fragrance.svg",
    slug: "room-fragrance",
  },
  {
    name: "Servingware & Tableware",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/images/furniture/icon/cushions.svg",
    slug: "servingware-and-tableware",
  },
  {
    name: "Bath & Shower",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/images/furniture/icon/shower.svg",
    slug: "bath-and-shower",
  },
];

async function page() {
  let allProducts: ProductT[] = [];

  try {
    allProducts = await getAllProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <>

      <section className="home-section-2 home-section-bg pt-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="slider-animate">
                <div>
                  <div className="home-contain rounded-0 p-0"
                    style={{
                      backgroundImage: "url(/assets/eme2023/images/fashion/home-banner/1.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                      height: "100%"
                    }}
                  >

                    <ImageError src="/assets/eme2023/images/fashion/banner/1.jpg" className='bg-img lazyload d-none' layout="fill" alt="Banner Image" />
                    <div className="home-detail home-big-space p-center-left home-overlay position-relative">
                      <div className="container-fluid-lg">
                        <div>
                          <h6 className="ls-expanded text-uppercase text-danger">Weekend Special offer
                          </h6>
                          <h1 className="heding-2">Premium Quality</h1>
                          <h5 className="text-content">Fresh & Top Quality Dry Fruits are available here!
                          </h5>
                          <button
                            className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto">Shop
                            Now <i className="fa-solid fa-arrow-right icon"></i></button>
                        </div>
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
              <SliderCategory></SliderCategory>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section product-section-3">
        <div className="container-fluid-lg">
          <SimpleVerticalProductHoverSectionV2 initialData={allProducts} title='Top Selling Items'
            n={1}
            hasIcon={false}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20
              }
            }}
            wrapperStyle={{
              border: "none"
            }}
          ></SimpleVerticalProductHoverSectionV2>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <div className="row g-md-4 g-3">
            <div className="col-xxl-8 col-xl-12 col-md-7">
              <div className="banner-contain hover-effect"
                style={{
                  height: "270px",
                  backgroundImage: "url(/assets/eme2023/images/fashion/banner/1.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <ImageError src="/assets/eme2023/images/fashion/banner/1.jpg" className='bg-img d-none lazyload' layout="fill" alt="Banner Image" />
                <div className="banner-details p-center-left p-4">
                  <div>
                    <h2 className="text-kaushan fw-normal theme-color">Get Ready To</h2>
                    <h3 className="mt-2 mb-3">TAKE ON THE DAY!</h3>
                    <p className="text-content banner-text">In publishing and graphic design, Lorem
                      ipsum is a placeholder text commonly used to demonstrate.</p>
                    <button
                      className="btn btn-animation btn-sm mend-auto">Shop Now <i
                        className="fa-solid fa-arrow-right icon"></i></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-12 col-md-5">
              <a href="shop-left-sidebar.html" className="banner-contain hover-effect h-100"
                style={{
                  backgroundImage: "url(/assets/eme2023/images/fashion/banner/2.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                  height: "100%"
                }}
              >
                <ImageError src="/assets/eme2023/images/fashion/banner/2.jpg" className='bg-img d-none lazyload' layout="fill" alt="Banner Image" />
                <div className="banner-details p-center-left p-4 h-100">
                  <div>
                    <h2 className="text-kaushan fw-normal text-danger">20% Off</h2>
                    <h3 className="mt-2 mb-2 theme-color">SUMMRY</h3>
                    <h3 className="fw-normal product-name text-title">Product</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="top-selling-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 col-lg-4 d-lg-block d-none">
              <div className="ratio_156"
                style={{
                  aspectRatio: "373/582",
                  width: "100%",
                  marginTop: "100px"
                }}
              >
                <div className="banner-contain-2 hover-effect"
                  style={{
                    backgroundImage: "url(/assets/eme2023/images/fashion/banner/3.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    height: "100%"
                  }}
                >
                  <ImageError src="/assets/eme2023/images/fashion/banner/3.jpg" className="bg-img d-none lazyload" alt="Banner Image" layout="fill"></ImageError>
                  <div className="banner-detail-2 p-bottom-center text-center home-p-medium">
                    <div>
                      <h2 className="text-qwitcher">Passion Meet</h2>
                      <h3>PERFECTION</h3>
                      <button className="btn btn-md">Shop
                        Now <i className="fa-solid fa-arrow-right icon"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-9 col-lg-8 d-flex">
              <section className="top-selling-section w-100">

                <div className="row">

                  <div className="col-xxl-4  col-xl-6 col-lg-12 col-md-4 col-sm-6">
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
                  <div className="col-xxl-4 col-xl-6  d-xl-block d-block d-lg-none col-md-4 col-sm-6">
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
                  <div className="col-xxl-4 d-xxl-block  d-lg-none d-block col-md-4 col-sm-6">
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

              </section>

            </div>
          </div>
        </div>
      </section>
      <section className="section-t-space">
        <div className="container-fluid-lg">
          <div className="banner-contain"
            style={{
              backgroundImage: "url(/assets/eme2023/images/fashion/banner/4.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              display: "block",
              height: "140px"
            }}
          >
            <ImageError src="/assets/eme2023/images/fashion/banner/4.jpg" className="bg-img d-none lazyload" alt="Banner Image" layout="fill"></ImageError>
            <div className="banner-details p-center w-100 p-4 text-white text-center">
              <div>
                <h3 className="lh-base fw-bold offer-text">Get $3 Cashback! Min Order of $30</h3>
                <h6 className="coupon-code coupon-code-white">Use Code : GROCERY1920</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section product-section-3">
        <div className="container-fluid-lg">
          <SimpleVerticalProductHoverSectionV2 initialData={allProducts} title='Top Selling Items'
            n={1}
            hasIcon={false}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20
              }
            }}
            wrapperStyle={{
              border: "none"
            }}
          ></SimpleVerticalProductHoverSectionV2>
        </div>
      </section>
      <section className="product-section product-section-3">
        <div className="container-fluid-lg">
          <SimpleVerticalProductHoverSectionV2 initialData={allProducts} title='Top Selling Items'
            n={1}
            hasIcon={false}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20
              }
            }}
            wrapperStyle={{
              border: "none"
            }}
          ></SimpleVerticalProductHoverSectionV2>
        </div>
      </section>
      <section className="section-t-space mb-5">
        <div className="container-fluid-lg">

          <ContactMail></ContactMail>
        </div>
      </section>



    </>
  )
}

export default page