
import { apiFetchSites } from "@/lib/api/api";
import { Metadata } from "next";
import { mapParamsToComponents } from "@/lib/helper/mapParamsToComponents";
import { BannerT } from "@/types/common.types";
export const defaultBanner: BannerT = {
  "id": 1,
  "name": "Deal siêu hot",
  "description": "Hoa quả tươi",
  "button_link": "#",
  "button_name": "Xem thêm",
  "sale_name": "Giảm giá",
  "sale_value": "5% OFF",
  "image": "/images/banner/5.jpg",
  "sort_order": 1,
  "status": 1,
  "is_deleted": 0,
  "created_at": "2025-11-24T00:00:00Z",
  "updated_at": "2025-11-24T00:00:00Z",
  "created_by": 0,
  "updated_by": 0
}
export async function generateMetadata(): Promise<Metadata> {
  try {
    const structure = await apiFetchSites('/pages/getDetail/home');
    const pageData = structure;

    const title = pageData?.meta_title || "Tiêu đề mặc định";
    const description = pageData?.meta_description || "Mô tả mặc định";
    const keywords = pageData?.meta_keywords || "Từ khóa mặc định";

    return {
      title: title,
      description: description,
      keywords: keywords,
      openGraph: {
        title: title,
        description: description,
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: "Sản thương mại điện tử - Công ty Cổ phần HONEYNET",
      description: "Mô tả mặc định",
      keywords: "Từ khóa mặc định",
    };
  }
}
export default async function Home() {
  let structure = null;
  try {
    structure = await apiFetchSites('/pages/getDetail/home');
  } catch (error) {
    console.error('Error fetching home page structure:', error);
    structure = { params: [] };
  }

  return (
    <>

      <h1 className="d-none">Sản thương mại điện tử - Công ty Cổ phần HONEYNET</h1>
      {mapParamsToComponents(structure?.params || [])}
      {/* <section className="page-0 pt-2">
        <div className="container-fluid-lg">
          <div className=" 0">
            <div className="row g-4 w-full">
              <div className="col-xl-8 ratio_65 wow fadeIn "
                style={{
                  aspectRatio: "100/65"
                }}
              >
                <Banner1 />
              </div>
              <div className="col-xl-4 ratio_65">
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
              <CategoryMenu initialData={categoryMenuData as unknown as CategoryT[]} title="Danh mục"></CategoryMenu>
              <Banner8></Banner8>
              <Banner9></Banner9>

              <HorizontalItemSection
                initialData={data}
                n={4}
                hasIcon={false}
                hasUnderline={true}
                title='Top sale'
                wrapperStyle={{
                  padding: "10px",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  }
                }}
              ></HorizontalItemSection>
            </div>
            <div className='col-xxl-9 col-xl-8'>
              <div className="row">
                <div className="col-12">
                  <BannerHoverSection></BannerHoverSection>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12  0">
                  <div className="col-md-12  section-b-space">
                    <VerticalNItems

                      description='Đừng bỏ lỡ cơ hội giảm giá đặc biệt chỉ trong hôm nay.'
                      title='Giá Tốt Hôm Nay'
                      link='/flash-sale'
                      startDate={new Date()}
                      endDate={new Date(Date.now() + 23 * 60 * 60 * 1000)}
                      n={1}


                      classOfItem="border-r border-gray-300 rounded bg-white"
                      initialData={data}
                      breakpoints={{
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 5
                        },
                        586: {
                          slidesPerView: 3,
                          spaceBetween: 5
                        },
                        992: {
                          slidesPerView: 4,
                          spaceBetween: 10
                        },
                        1200: {
                          slidesPerView: 6,
                          spaceBetween: 10
                        },
                        1400: {
                          slidesPerView: 7,
                          spaceBetween: 10
                        }
                      }}
                      hasNavigation={true}

                    ></VerticalNItems>
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
                    <VerticalNItems
                      n={1}
                      classOfItem="border-r border-gray-300 rounded !bg-white"
                      initialData={data}
                      breakpoints={{
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 5
                        },
                        640: {
                          slidesPerView: 3,
                          spaceBetween: 5
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 10
                        },
                        1280: {
                          slidesPerView: 6,
                          spaceBetween: 10
                        }
                      }}
                      hasNavigation={true}
                      description='Dung bo lo'
                      title='co the ban thich'
                      link='/flash-sale'
                    ></VerticalNItems>
                  </div>
                  <div className="col-md-12 section-b-space">
                    <section className="category-section-3">
                      <SearchByCategoryHasAction></SearchByCategoryHasAction>
                    </section>
                  </div>
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
                  <HorizontalItemSection
                    n={4}
                    title="Sản phẩm bán chạy"
                    description="Đỉnh Cao Hương Vị - Chinh Phục Đòi Hỏi Ăn Uống Của Bạn!"
                    initialData={data}
                    wrapperStyle={{
                      border: "none"
                    }}

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
            <ContactMail></ContactMail>

          </div>
         <DealSection></DealSection> 
          <div className=" ">
          </div>
        </div>
      </section> */}

    </>
  );
}
