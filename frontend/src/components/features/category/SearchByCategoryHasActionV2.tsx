"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2'
import React from 'react'
import CategoryItemHasAction from '@/components/features/category/CategoryItemHasAction'
import { categoryMenuData } from '@/assets/data/Home'

export const data = [
  {
    name: "Fashion",
    link: "shop-left-sidebar.html",
    slug: "fashion",
    totalItems: 25,
    image: "/assets/eme2023/images/grocery/category/1.png",
  },
  {
    name: "Beauty",
    link: "shop-left-sidebar.html",
    slug: "beauty",
    totalItems: 20,
    image: "/assets/eme2023/images/grocery/category/2.png",
  },
  {
    name: "Accessories",
    link: "shop-left-sidebar.html",
    slug: "accessories",
    totalItems: 14,
    image: "/assets/eme2023/images/grocery/category/3.png",
  },
  {
    name: "Health",
    link: "shop-left-sidebar.html",
    slug: "health",
    totalItems: 43,
    image: "/assets/eme2023/images/grocery/category/4.png",
  },
  {
    name: "Stationery",
    link: "shop-left-sidebar.html",
    slug: "stationery",
    totalItems: 23,
    image: "/assets/eme2023/images/grocery/category/5.png",
  },
  {
    name: "Baby care",
    link: "shop-left-sidebar.html",
    slug: "baby-care",
    totalItems: 54,
    image: "/assets/eme2023/images/grocery/category/6.png",
  },
  {
    name: "Electronics",
    link: "shop-left-sidebar.html",
    slug: "electronics",
    totalItems: 32,
    image: "/assets/eme2023/images/grocery/category/7.png",
  },
  {
    name: "Sports",
    link: "shop-left-sidebar.html",
    slug: "sports",
    totalItems: 29,
    image: "/assets/eme2023/images/grocery/category/8.png",
  },
]
function SearchByCategoryHasActionV2() {
  return (
    <>
      <section className='category-section-3'>
        <div className='container-fluid-lg'>
          <CustomSectionV2
            items={data}
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
              992: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1400: {
                slidesPerView: 6,
                spaceBetween: 20
              },
              1600: {
                slidesPerView: 7,
                spaceBetween: 20
              },
              1800: {
                slidesPerView: 8,
                spaceBetween: 20
              }
            }}
            hasNavigation={true}
            title='Shop By Categories'
            wrapperStyle={{
              border: "none"
            }}
            renderItem={(item, index) => (
              <CategoryItemHasAction item={item} key={index} />
            )}
          />
        </div>
      </section>
    </>
  )
}

export default SearchByCategoryHasActionV2
