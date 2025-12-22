
import { data } from '@/assets/data/Home'
import Banner1 from '@/components/features/banner/Banner1'
import Banner10 from '@/components/features/banner/Banner10'
import Banner11 from '@/components/features/banner/Banner11'
import Banner12 from '@/components/features/banner/Banner12'
import Banner13 from '@/components/features/banner/Banner13'
import Banner14 from '@/components/features/banner/Banner14'
import Banner15 from '@/components/features/banner/Banner15'
import Banner2 from '@/components/features/banner/Banner2'
import Banner3 from '@/components/features/banner/Banner3'
import Banner8 from '@/components/features/banner/Banner8'
import Banner9 from '@/components/features/banner/Banner9'
import BannerSlider from '@/components/features/banner/BannerSlider'
import CustomerReview from '@/components/features/banner/CustomerReview'
import CategoryMenu from '@/components/features/category/CategoryMenu'
import SearchByCategory from '@/components/features/category/SearchByCategory'
import BlogSection from '@/components/features/news/NewsBlogSection'
import HorizontalItemNoActionSection from '@/components/features/product/section/HorizontalItemNoActionSection'
import VerticalNItemV2 from '@/components/features/product/section/VerticalNItemV2'
import React from 'react'

function page() {
  return (
    <>
      <h1 className="d-none">Sản thương mại điện thử - Công ty Cổ phần HONEYNET</h1>
      <section className="page-0 pt-2">
        <div className="container-fluid-lg">

          <div className=" 0">
            <div className="row g-4">
              <div className="col-xl-8 ratio_65 wow fadeIn "
                style={{
                  aspectRatio: "100/65"
                }}
              >
                <Banner1 />
              </div>
              <div className="col-xl-4 ratio_65"
                style={{
                  aspectRatio: "100/65"
                }}
              >
                <div className="row g-4">
                  <div className="col-xl-12 col-md-6 wow fadeIn" data-wow-daley="0.1s">
                    <Banner2 />
                  </div>
                  <div className="col-xl-12 col-md-6 wow fadeIn" data-wow-daley="0.15s">
                    <Banner3></Banner3>
                  </div>
                </div>
              </div>
            </div>
            <BannerSlider />


          </div>
        </div>
      </section>
      <section className="page-1 ">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
              <CategoryMenu></CategoryMenu>
              <Banner8></Banner8>
              <Banner9></Banner9>
              <div className='px-5 category-menu'>
                <HorizontalItemNoActionSection
                  initialData={data}
                  n={4}
                  hasIcon={false}
                  hasUnderline={true}
                  title='Top sale'
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0
                    },


                  }}
                  wrapperStyle={{
                    border: "none"
                  }}
                  classOfColumn='column-separation gap-4'
                ></HorizontalItemNoActionSection>
              </div>
              <CustomerReview></CustomerReview>
            </div>
            <div className='col-xxl-9 col-xl-8'>
              {/* <div className="row">
                <div className="col-12">
                  <BannerHoverSection></BannerHoverSection>
                </div>
              </div> */}
              <div className="row">
                <div className="col-md-12  0">
                  <div className="col-md-12  section-b-space">
                    <VerticalNItemV2

                      description='Đừng bỏ lỡ cơ hội giảm giá đặc biệt chỉ trong hôm nay.'
                      title='Giá Tốt Hôm Nay'
                      startDate={new Date()}
                      endDate={new Date(Date.now() + 23 * 60 * 60 * 1000)}
                      n={1}
                      classOfItem="border-r border-gray-300 rounded bg-white"
                      initialData={data}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                          spaceBetween: 0
                        },
                        576: {
                          slidesPerView: 2,
                          spaceBetween: 5
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 0
                        },
                        992: {
                          slidesPerView: 4,
                          spaceBetween: 0
                        },
                        1200: {
                          slidesPerView: 3,
                          spaceBetween: 0
                        },
                        1400: {
                          slidesPerView: 4,
                          spaceBetween: 0
                        },
                        1600: {
                          slidesPerView: 5,
                          spaceBetween: 0
                        },
                        1800: {
                          slidesPerView: 6,
                          spaceBetween: 0
                        }
                      }}
                      hasNavigation={false}

                    ></VerticalNItemV2>
                  </div>
                  <div className="col-md-6  section-b-space">
                    <Banner10></Banner10>
                  </div>
                  <div className="col-md-12  section-b-space">
                    <SearchByCategory />
                  </div>

                  <div className="col-md-6  section-b-space">
                    <Banner11></Banner11>
                  </div>
                  <div className="col-md-12  section-b-space">
                    <VerticalNItemV2
                      n={1}


                      classOfItem="border-r border-gray-300 rounded !bg-white"
                      initialData={data}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                          spaceBetween: 0
                        },
                        576: {
                          slidesPerView: 2,
                          spaceBetween: 5
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 0
                        },
                        992: {
                          slidesPerView: 4,
                          spaceBetween: 0
                        },
                        1200: {
                          slidesPerView: 3,
                          spaceBetween: 0
                        },
                        1400: {
                          slidesPerView: 4,
                          spaceBetween: 0
                        },
                        1600: {
                          slidesPerView: 5,
                          spaceBetween: 0
                        },
                        1800: {
                          slidesPerView: 6,
                          spaceBetween: 0
                        }
                      }}
                      hasNavigation={false}
                      description='Dung bo lo'
                      title='co the ban thich'
                    ></VerticalNItemV2>
                  </div>
                  {/* <div className="col-md-12 section-b-space">
                    <section className="category-section-3">
                      <SearchByCategoryHasAction></SearchByCategoryHasAction>
                    </section>
                  </div> */}
                  <div className="col-md-12  section-b-space">
                    <Banner12></Banner12>

                  </div>
                </div>
                <div className="col-md-4  section-b-space">
                  <Banner13></Banner13>

                </div>
                <div className="col-md-8  section-b-space">
                  <Banner14></Banner14>

                </div>
                <div className="col-md-12  section-b-space">
                  <HorizontalItemNoActionSection
                    n={4}
                    title="Sản phẩm bán chạy"
                    description="Đỉnh Cao Hương Vị - Chinh Phục Đòi Hỏi Ăn Uống Của Bạn!"
                    initialData={data}
                    wrapperStyle={{ border: "none" }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                      },
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 10
                      },
                      960: {
                        slidesPerView: 3,
                        spaceBetween: 20
                      }

                    }}
                    classOfColumn='border rounded-xl p-3'
                  />
                </div>
                <div className="col-md-12  section-b-space">

                  <Banner15></Banner15>
                </div>
                <div className="col-md-12  0">
                  <BlogSection></BlogSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-2 ">
        <div className="container-fluid-lg">
          <div className=" section-b-space">
            <div className="newsletter-section wow fadeInUp">
              <div className="newsletter-box newsletter-box-2">
                <div className="newsletter-contain py-5">
                  <div className="row">
                    <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                      <div className="newsletter-detail px-4">
                        <h2>Theo dõi và nhận ngay ưu đãi</h2>
                        <div className="newsletter-des">Nhận ngay mã giảm giá 100k cho đơn đầu tiên</div>
                        <div className="input-box">
                          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Địa chỉ email của bạn" />
                          <i className="fa-solid fa-envelope arrow"></i>
                          <button className="sub-btn btn-animation">
                            <span className="d-sm-block d-none">Đăng ký</span>
                            <i className="fa-solid fa-arrow-right icon"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* <DealSection></DealSection> */}
          <div className=" ">
          </div>
        </div>
      </section>


    </>
  )
}

export default page