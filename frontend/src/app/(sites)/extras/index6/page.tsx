
import { getAllProducts } from '@/lib/api/product'
import ImageError from '@/components/ui/ImageError'
import "swiper/css";
import ServiceSection from '@/components/ui/ServiceSection'
import { data } from '@/assets/data/Home'
import CategoryMenu from '@/components/features/category/CategoryMenu'
import { CategoryT, CategoryTV0 } from '@/types/common.types'
import SearchByCategoryV2 from '@/components/features/category/SearchByCategoryV2'
import Vertical3ActionSectionV3 from '@/components/features/product/section/Vertical3ActionSectionV3';
import ColNHorizontalItemsSectionV2 from '@/components/features/product/section/HorizontalNItemsSectionV2';
import ContactMail from '@/components/ui/ContactMail';
import VerticalNItemV2 from '@/components/features/product/section/VerticalNItemV2';

const categories = [
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
  let allProducts = [];

  try {
    allProducts = await getAllProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <>
      <section className="home-section pt-2 ratio_50" >
        <div className="container-fluid-lg">
          <div className="row g-4" style={{
            width: "100%",
            aspectRatio: "1024 / 294",
          }}>
            <div className="col-xl-9 col-lg-8 ratio_50_1" style={{ aspectRatio: '1155/670' }}>
              <div className="home-contain furniture-contain-2" style={{
                backgroundImage: "url(/assets/eme2023/images/furniture/banner/1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                display: "block",
                height: "100%"
              }}>
                <ImageError src="/assets/eme2023/images/furniture/banner/1.jpg" alt="Furniture Banner" width={2000} height={1000} className="bg-img object-cover d-none  lazyload" />
                <div className="home-detail p-top-left mend-auto w-100">
                  <div>
                    <h6>Exclusive offer <span>30% Off</span></h6>
                    <h1 className="text-uppercase poster-1 text-content furniture-heading">Stay home &
                      delivered your <span className="daily">Daily Needs</span></h1>
                    <button className="btn btn-furniture mt-xxl-4 mt-3 home-button mend-auto">Shop Now <i
                      className="fa-solid fa-right-long ms-2 icon"></i></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 d-lg-inline-block d-none">
              <div className="home-contain h-100 home-furniture"
                style={{
                  backgroundImage: "url(/assets/eme2023/images/furniture/banner/2.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                  height: "100%"
                }}
              >
                <ImageError src="/assets/eme2023/images/furniture/banner/2.png" alt="Furniture Banner" width={300} height={300} className="bg-img  lazyload d-none" />

                <div className="home-detail p-top-left home-p-sm feature-detail mend-auto">
                  <div>
                    <h2 className="mt-0 theme-color text-kaushan fw-normal">Exclusive</h2>
                    <h3 className="furniture-content">Furniture</h3>
                    <a href="shop-left-sidebar.html"
                      className="shop-button btn btn-furniture mt-0 d-inline-block btn-md text-content">Shop
                      Now <i className="fa-solid fa-right-long ms-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceSection></ServiceSection>
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-9 col-xl-8">
              <VerticalNItemV2
                title="Top Save Today"
                description="Don't miss this opportunity at a special discount just for this week."
                initialData={data}
                startDate={new Date()}
                endDate={new Date(Date.now() + 24 * 60 * 60 * 1000)}
                n={2}

              ></VerticalNItemV2>
              <SearchByCategoryV2 title='Bowse by Categories'
                description='Top Categories Of The Week'
                hasNavigation={false}
                hasIcon={true}
                initialData={categories as unknown as CategoryTV0[]}
                breakpoints={{
                  0: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  },
                  576: {
                    slidesPerView: 4,
                    spaceBetween: 20
                  },
                  768: {
                    slidesPerView: 5
                    ,
                    spaceBetween: 20
                  },
                  992: {
                    slidesPerView: 6,
                    spaceBetween: 20
                  },
                  1400: {
                    slidesPerView: 7,
                    spaceBetween: 20
                  },
                  1800: {
                    slidesPerView: 8,
                    spaceBetween: 20
                  }
                }}
              ></SearchByCategoryV2>
              <div className="section-t-space section-b-space"

              >
                <div className="row g-md-4 g-3 h-100">
                  <div className="col-md-6 " style={{
                    height: "200px"
                  }}>
                    <div className="banner-contain hover-effect"
                      style={{
                        backgroundImage: "url(/assets/eme2023/images/furniture/banner/4.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                        height: "100%"
                      }}
                    >
                      <ImageError src="/assets/eme2023/images/furniture/banner/4.jpg" alt="Furniture Banner" width={300} height={300} className="bg-img  lazyload d-none" />
                      <div className="banner-details p-center-left p-4">
                        <div>
                          <h3 className="text-kaushan text-yellow">50% offer</h3>
                          <h4 className="theme-color mb-2 fw-normal"><span
                            className="theme-color fw-bold">Restyling</span> your Home</h4>
                          <button
                            className="btn btn-furniture btn-sm mend-auto">Shop Now <i
                              className="fa-solid fa-arrow-right icon"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6" style={{
                    height: "200px"
                  }}>
                    <div className="banner-contain hover-effect"
                      style={{
                        backgroundImage: "url(/assets/eme2023/images/furniture/banner/5.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                        height: "100%"
                      }}
                    >
                      <ImageError src="/assets/eme2023/images/furniture/banner/5.jpg" alt="Furniture Banner" width={300} height={300} className="bg-img  lazyload d-none" />
                      <div className="banner-details p-center-left p-4">
                        <div>
                          <h3 className="text-kaushan text-yellow">50% offer</h3>
                          <h4 className="theme-color mb-2 fw-normal"><span className="theme-color fw-bold">New
                            Elite</span> Collections</h4>
                          <button
                            className="btn btn-furniture btn-sm mend-auto">Shop Now <i
                              className="fa-solid fa-arrow-right icon"></i></button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <section className="product-section-3">
                <Vertical3ActionSectionV3 title='Fruits & Vegetables' description='A virtual assistant collects the products from your list'

                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 0
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
                ></Vertical3ActionSectionV3>

              </section>

            </div>
            <div className="col-xxl-3 col-xl-4">
              <CategoryMenu
                title="Shop By Product"
                initialData={categories as unknown as CategoryT[]}
              ></CategoryMenu>
              <div className="ratio_156 section-t-space"
                style={{
                  aspectRatio: "156/100",
                  height: "600px",
                }}
              >
                <div className="home-contain hover-effect"
                  style={{
                    backgroundImage: "url(/assets/eme2023/images/furniture/banner/3.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    height: "100%"
                  }}
                >
                  <ImageError src="/assets/eme2023/images/furniture/banner/3.jpg" alt="Furniture Banner" width={300} height={300} className="bg-img  lazyload d-none" />
                  <div className="home-detail p-top-left home-p-medium">
                    <div>
                      <h4 className="text-yellow home-banner text-kaushan">New Arrival</h4>
                      <h3 className="text-uppercase theme-color fw-bold mb-1">Desk Table</h3>
                      <p className="text-content mb-3">Top Selling Of The Week! Exclusive Offer!</p>
                      <button
                        className="btn btn-furniture btn-md mend-auto">Shop Now <i
                          className="fa-solid fa-arrow-right icon"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-menu mt-10">
                <ColNHorizontalItemsSectionV2
                  n={2}
                  title='Trending Products'
                  hasIcon={false}
                  initialData={data}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10
                    }
                  }}

                ></ColNHorizontalItemsSectionV2>
              </div>
            </div>

          </div>

        </div>
      </section>
      <section className="banner-section">
        <div className='container-fluid-lg'>
          <div className="row">
            <div className="col-12">
              <div className="banner-contain-3 section-b-space section-t-space hover-effect overflow-visible"
                style={{
                  backgroundImage: "url(/assets/eme2023/images/furniture/banner/6.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <ImageError src="/assets/eme2023/images/furniture/banner/6.jpg" alt="Furniture Banner" width={1600} height={378} className='d-none' />
                <ImageError src="/assets/eme2023/images/furniture/banner/1-1.png" alt="Flower Pot" width={199} height={362} className="flower-pot img-fluid" />
                <div
                  className="banner-detail p-center-left position-relative d-block py-0 banner-furniture mend-auto">
                  <div className="row">
                    <div className="col-xl-6 offset-xxl-2 offset-xl-1 col-md-8 col-sm-9">
                      <h4 className="text-uppercase text-yellow text-kaushan furniture-title">Best of
                        Collections <ImageError src="/assets/eme2023/images/furniture/arrow.svg" alt="Honeynet" width={181} height={95} />
                      </h4>
                      <h2 className="mt-sm-3 mt-1 mb-2 text-content">Home Decor <span
                        className="theme-color fw-bold">LookBook</span> 2022</h2>
                      <p className="text-content">In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate.</p>
                      <button className="btn theme-bg-color mt-sm-4 mt-2 btn-md text-white fw-bold">Shop Now</button>
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
          <ColNHorizontalItemsSectionV2
            n={4}
            title='Our best Seller'
            description="A virtual assistant collects the products from your list"
            initialData={data}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10

              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
          ></ColNHorizontalItemsSectionV2>
        </div>

      </section>
      <section className='mb-10'>
        <div className='container-fluid-lg'>

          <ContactMail></ContactMail>

        </div>
      </section>
    </>
  )
}

export default page