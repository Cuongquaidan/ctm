"use client"
import CustomSection from '@/components/ui/CustomSection'
import React from 'react'
import CategoryItemHasAction from '@/components/features/category/CategoryItemHasAction'
import { categoryMenuData } from '@/assets/data/Home'
import { CategoryTV0 } from '@/types/common.types'
export const data: CategoryTV0[] = [
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
function SearchByCategoryHasAction() {
  return (
    <>
      <section className='category-section-3'>
        <div className='container-fluid-lg'>
          <CustomSection
            items={data}
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
                slidesPerView: 2,
                spaceBetween: 0
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 0
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 0
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 0
              },
              1600: {
                slidesPerView: 6,
                spaceBetween: 0
              },
              1800: {
                slidesPerView: 7,
                spaceBetween: 0
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

export default SearchByCategoryHasAction