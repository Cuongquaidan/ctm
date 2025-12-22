

import { data } from '@/assets/data/Home'
import Banner12 from '@/components/features/banner/Banner12'
import BannerSlider from '@/components/features/banner/BannerSlider'
import SearchByCategoryV2 from '@/components/features/category/SearchByCategoryV2'
import FeaturedBlogSectionV2 from '@/components/features/news/FeaturedNewsBlogSectionV2'
import HorizontalItemNoActionSection from '@/components/features/product/section/HorizontalItemNoActionSection'
import VerticalProductHoverSectionV2 from '@/components/features/product/section/VerticalProductHoverSectionV2'
import StoreAds from '@/components/features/store/StoreAds'
import ContactMail from '@/components/ui/ContactMail'
import TimingBoxDHMS from '@/components/ui/TimingBoxDHMS'
import { getAllProducts, getFeaturedProductsPaginated } from '@/lib/api/product'
import { CategoryTV0, ProductT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
const categories: CategoryTV0[] = [
  {
    name: "Vegetables & Fruit",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/vegetable.svg",
    slug: "vegetables-and-fruit",
    children: [],
  },
  {
    name: "Beverages",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/cup.svg",
    slug: "beverages",
    children: [],
  },
  {
    name: "Meats & Seafood",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/meats.svg",
    slug: "meats-and-seafood",
    children: [],
  },
  {
    name: "Breakfast",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/breakfast.svg",
    slug: "breakfast",
    children: [],
  },
  {
    name: "Frozen Foods",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/frozen.svg",
    slug: "frozen-foods",
    children: [],
  },
  {
    name: "Milk & Dairies",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/milk.svg",
    slug: "milk-and-dairies",
    children: [],
  },
  {
    name: "Pet Food",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/pet.svg",
    slug: "pet-food",
    children: [],
  },
  {
    name: "Biscuits & Snacks",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/biscuit.svg",
    slug: "biscuits-and-snacks",
    children: [],
  },
  {
    name: "Grocery & Staples",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/grocery.svg",
    slug: "grocery-and-staples",
    children: [],
  },
];
async function page() {
  let allProducts = [] as ProductT[];
  let allFeaturedNews = [];

  try {
    allProducts = (await getAllProducts());
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  try {
    const response = await getFeaturedProductsPaginated();
    allFeaturedNews = response?.data || [];
  } catch (error) {
    console.error('Error fetching featured news:', error);
  }

  return (
    <>
      <section className="home-section pt-2">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xl-9 col-lg-8">
              <div className="home-contain h-100"
                style={{ aspectRatio: '200/100' }}
              >
                <ImageError fill src="/assets/eme2023/images/veg-2/banner/1.jpg" className="bg-img    lazyload" alt="honeynet" />
                <div className="home-detail p-center-left w-75 position-relative mend-auto">
                  <div>
                    <h6>Exclusive offer <span>30% Off</span></h6>
                    <h1 className="w-75 text-uppercase poster-1">Stay home & delivered your <span
                      className="daily">Daily Needs</span></h1>
                    <p className="w-58 d-none d-sm-block">Many organizations have issued official
                      statements encouraging people to reduce their intake of sugary drinks.</p>
                    <button
                      className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto">Shop Now <i
                        className="fa-solid fa-right-long ms-2 icon"></i></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 d-lg-inline-block d-none ratio_156" style={{ aspectRatio: '156/100' }}>
              <div className="home-contain h-100">
                <ImageError fill src="/assets/eme2023/images/veg-2/banner/2.jpg" className="bg-img    lazyload" alt="honeynet" />
                <div className="home-detail p-top-left home-p-sm w-75">
                  <div>
                    <h2 className="mt-0 text-danger">45% <span className="discount text-title">OFF</span>
                    </h2>
                    <h3 className="theme-color">Real Refreshment</h3>
                    <h5 className="text-content">Only this week, Don't miss..</h5>
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
              <SearchByCategoryV2
                title='Bowse by Categories'
                description='Top Categories Of The Week'
                hasNavigation={false}
                hasIcon={true}
                initialData={categories}
              ></SearchByCategoryV2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <Banner12></Banner12>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="ratio_60" >
        <div className="container-fluid-lg">
          <div className="row g-3">
            <BannerSlider></BannerSlider>
          </div>

        </div>
      </section> */}
      <section>
        <div className="container-fluid-lg">
          <VerticalProductHoverSectionV2
            title='FRUIT & VEGETABLES'
            description='A virtual assistant collects the products from your list'
            initialData={allProducts}
            classOfItem='border'
            classOfColumn='!gap-0'
            n={2}
          ></VerticalProductHoverSectionV2>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="offer-box hover-effect">
                <ImageError fill src="/assets/eme2023/images/veg-2/banner/3.jpg" className="bg-img    lazyload" alt="honeynet" />

                <div className="offer-contain p-4">
                  <div className="offer-detail">
                    <h2 className="text-dark">Special Offers <span className="text-danger fw-bold">of the
                      week!</span></h2>
                    <p className="text-content">Special offer on this discount, Hurry Up!</p>
                  </div>
                  <div className="offer-timing">
                    <div className="title-flex" style={{
                      backgroundColor: "#ff4f4f"
                    }}>
                      <TimingBoxDHMS
                        endDate={new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)}
                        startDate={new Date()}
                        scale={3}

                      ></TimingBoxDHMS>
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
          <VerticalProductHoverSectionV2
            title='BREAKFAST & DAIRY'
            description='A virtual assistant collects the products from your list'
            initialData={allProducts}
            n={2}
            classOfItem='border'
            classOfColumn='!gap-0'
          ></VerticalProductHoverSectionV2>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <StoreAds></StoreAds>
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
      <section>
        <div className="container-fluid-lg">
          <FeaturedBlogSectionV2 ></FeaturedBlogSectionV2>
        </div>
      </section>
      <section className="newsletter-section section-b-space">
        <div className="container-fluid-lg">
          <ContactMail></ContactMail>
        </div>
      </section>
    </>
  )
}

export default page