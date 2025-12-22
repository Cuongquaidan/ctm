import Advertisement1 from "@/components/features/banner/Advertisement1";
import Advertisement5 from "@/components/features/banner/Advertisement5";
import LayoutBanners1 from "@/components/features/banner/LayoutBanners1";
import CategoryMenu from "@/components/features/category/CategoryMenu";
import HorizontalItemSection from "@/components/features/product/section/HorizontalItemSection";
import { Fragment } from "react";
import { buildURIWithQueries } from "@/lib/api/api";
import SearchByCategory from "@/components/features/category/SearchByCategory";
import Advertisement4 from "@/components/features/banner/Advertisement4";
import Advertisement7 from "@/components/features/banner/Advertisement7";
import Advertisement6 from "@/components/features/banner/Advertisement6";
import Advertisement3 from "@/components/features/banner/Advertisement3";
import NewsBlogSection from "@/components/features/news/NewsBlogSection";
import ContactMail from "@/components/ui/ContactMail";
import VerticalNItemsFlashsale from "@/components/features/product/section/VerticalNItemsFlashsale";
import LayoutBanners2 from "@/components/features/banner/LayoutBanners2";
import LayoutBanners3 from "@/components/features/banner/LayoutBanners3";
import LayoutBanners4 from "@/components/features/banner/LayoutBanners4";
import LayoutBanners5 from "@/components/features/banner/LayoutBanners5";
import LayoutBanners6 from "@/components/features/banner/LayoutBanners6";
import LayoutBanners7 from "@/components/features/banner/LayoutBanners7";
import { getInfoTimeFlashSale } from ".";

export const mapParamsToComponents = (params: any[]) => {
  return params.map((param, index) => (
    <section key={index} className={`page-${index} ${param.className}`}>
      <div className="container-fluid-lg">
        {
          checkHasDifferenceClassCol(param.data) ? (
            <div className="row" key={index}>
              {param.data && param.data.map((col: any, colIndex: number) => {
                const hasDiff = checkHasDifferenceClassCol(col.data);
                return <div key={index + "-" + colIndex} className={`col-md-${col.classCol} ${col.intervale || ""}`}>
                  {hasDiff ? <div className="row">
                    {col.data && col.data.map((obj: any, objIndex: number) => (
                      ObjectToComponent(obj, hasDiff, objIndex)
                    ))}
                  </div> : <Fragment key={colIndex}>
                    {col.data && col.data.map((obj: any, objIndex: number) => (
                      ObjectToComponent(obj, hasDiff, objIndex)
                    ))
                    }
                  </Fragment>}
                </div>
              })}
            </div>
          ) : (
            <>
              {param.data && param.data.map((col: any, colIndex: number) => {
                const hasDiff = checkHasDifferenceClassCol(col.data);
                return <Fragment key={colIndex}>
                  {hasDiff ? <div className="row" key={colIndex}>
                    {col.data && col.data.map((obj: any, objIndex: number) => (
                      ObjectToComponent(obj, hasDiff, objIndex)
                    ))}
                  </div> : <>
                    {col.data && col.data.map((obj: any, objIndex: number) => (
                      ObjectToComponent(obj, hasDiff, objIndex)
                    ))
                    }
                  </>}
                </Fragment  >
              })}
            </>
          )
        }
      </div>
    </section>
  ))
}

const ObjectToComponent = (obj: Record<string, any>, hasDiff: boolean, key: number) => {


  return <div key={key} className={`${obj.intervale} ${obj.classCol && hasDiff ? `col-md-${obj.classCol}` : ""}`}>
    {
      renderComponentByTypeAndLayout(obj)
    }
  </div>
}

const checkHasDifferenceClassCol = (arr: Record<string, any>[]) => {
  let hasDiff = false;
  const classColFirst = arr[0]?.classCol;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]?.classCol.toString() !== classColFirst.toString()) {
      hasDiff = true;
      break;
    }
  }
  return hasDiff;
}

const getListURI = (type: string) => {
  switch (type) {
    case 'banners':
      return '/banners/getList';
    case 'productscat':
      return '';
    case 'advertisement':
      return '/categories';
    case 'productshot':
      return '/products/getList/hot';
    case 'flashsale':
      return '/productPromotions/getList';
    default:
      return '';
  }
}

const renderComponentByTypeAndLayout = (obj?: Record<string, any>) => {
  switch (obj?.type) {
    case 'banners': {
      if (obj.layout === "1") {
        return <LayoutBanners1 arr={obj.id as number[] || []} ></LayoutBanners1>
      }
      if (obj.layout === "2") {
        return <LayoutBanners2 arr={obj.id as number[] || []} ></LayoutBanners2>
      }
      if (obj.layout === "3") {
        return <LayoutBanners3 arr={obj.id as number[] || []} ></LayoutBanners3>
      }
      if (obj.layout === "4") {
        return <LayoutBanners4 arr={obj.id as number[] || []} ></LayoutBanners4>
      } if (obj.layout === "5") {
        return <LayoutBanners5 arr={obj.id as number[] || []} ></LayoutBanners5>
      } if (obj.layout === "6") {
        return <LayoutBanners6 arr={obj.id as number[] || []} ></LayoutBanners6>
      } if (obj.layout === "7") {
        return <LayoutBanners7 arr={obj.id as number[] || []} ></LayoutBanners7>
      }
    }
    case 'productscat': {
      if (obj.layout === "1") {
        return <CategoryMenu title={obj.name ? obj.name["1"] : ""} uri={'/categories/getListByArrayIds'} id={obj.id as number[]}></CategoryMenu>
      }
      if (obj.layout === "2") {
        return <SearchByCategory uri="/categories/getListByArrayIds" title={obj.name ? obj.name["1"] : ""}
          description={obj.des ? obj.des["1"] : ""}
          id={obj.id as number[]}

        ></SearchByCategory>
      }
    }
    case 'advertisement':
      {
        if (obj.layout === "1") {
          return <Advertisement1 id={typeof (obj.id) === "string" ? obj.id : undefined} />
        }
        if (obj.layout === "3") {
          return <Advertisement3 id={typeof (obj.id) === "string" ? obj.id : undefined} />
        }
        if (obj.layout === "4") {
          return <Advertisement4 id={typeof (obj.id) === "string" ? obj.id : undefined} />
        }
        if (obj.layout === "5") {
          return <Advertisement5 id={typeof (obj.id) === "string" ? obj.id : undefined} />
        }
        if (obj.layout === "6") {
          return <Advertisement6 id={typeof (obj.id) === "string" ? obj.id : undefined} />
        }
        if (obj.layout === "7") {
          return <Advertisement7 id={typeof (obj.id) === "string" ? obj.id : undefined} />
        }

      }
    // /products/getList ? hotSh = 1
    case 'productshot':
      {
        if (obj.layout === "1") {

          return <HorizontalItemSection
            url={buildURIWithQueries("/products/getList", {
              hotSh: 1,
              limit: obj.limit,
              order: obj.order,
            })}
            n={4}
            hasIcon={false}
            hasUnderline={true}
            title={obj.name ? obj.name["1"] : ""}
            description={obj.des ? obj.des["1"] : ""}
            link={obj.link ? obj.link["1"] : ""}
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
        }

        if (obj.layout === "4") {
          return <HorizontalItemSection
            url={buildURIWithQueries("/products/getList", {
              hotSh: 1,
              limit: obj.limit,
              order: obj.order,
            })}
            n={4}
            classOfColumn="p-4 rounded-xl border "
            hasIcon={true}
            title={obj.name ? obj.name["1"] : ""}
            description={obj.des ? obj.des["1"] : ""}
            link={obj.link ? obj.link["1"] : ""}
            wrapperStyle={{
              padding: "10px",
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
          ></HorizontalItemSection>
        }

      }
    case 'flashsale': {
      if (obj.layout === "1") {

        const { flashType, startCountdownDate, endCountdownDate } = getInfoTimeFlashSale();
        return <VerticalNItemsFlashsale
          url={buildURIWithQueries("/promotions/getFlashSaleByProducts", {
            limit: obj.limit,
            order: obj.order,
            ft: flashType,
          })}
          title={obj.name ? obj.name["1"] : ""}
          description={obj.des ? obj.des["1"] : ""}
          link={"/flash-sale"}
          n={1}
          classOfItem="border-r border-gray-300 rounded bg-white"
          startDate={startCountdownDate}
          isFlashSaleItem={true}
          endDate={endCountdownDate}
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

        ></VerticalNItemsFlashsale>
      }
      if (obj.layout === "3") {
        return <VerticalNItemsFlashsale
          url={buildURIWithQueries("/promotions/getFlashSaleByProducts", {
            limit: obj.limit,
            order: obj.order,
          })}
          title={obj.name ? obj.name["1"] : ""}
          description={obj.des ? obj.des["1"] : ""}
          link={obj.link ? obj.link["1"] : ""}
          n={1}
          isFlashSaleItem={false}
          classOfItem="border-r border-gray-300 rounded bg-white"
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

        ></VerticalNItemsFlashsale>
      }
    }
    case 'newshot': {
      if (obj.layout === "1") {
        return <NewsBlogSection
          uri={buildURIWithQueries("/news/getList", {
            limit: obj.limit,
            order: obj.order,
            hotSh: 1,
          })}
          title={obj.name ? obj.name["1"] : ""}
          description={obj.des ? obj.des["1"] : ""}
          link={obj.link ? obj.link["1"] : ""}
          wrapperStyle={{
            border: "none"
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 15 },
            1280: { slidesPerView: 3, spaceBetween: 20 },
          }}
        ></NewsBlogSection>
      }
    }
    case 'contact': {
      return <ContactMail></ContactMail>
    }
    default:
      return '';
  }
}
