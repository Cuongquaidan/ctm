'use client';

import { categoryMenuData } from '@/assets/data/Home'
import React from 'react'
import SearchCategoryItem from '@/components/features/category/SearchCategoryItem'
import 'swiper/css';
import 'swiper/css/navigation';
import CustomSection from '@/components/ui/CustomSection';
import { CategoryT, CategoryTV0 } from '@/types/common.types';

function SearchByCategoryClient({
  items, title, description
}: {
  items: CategoryT[],
  title?: string,
  description?: string
}) {


  return (
    <>

      <CustomSection<CategoryT>
        items={items}
        title={title} description={description}
        renderItem={(item, index) => (<SearchCategoryItem item={item} key={index} />)}
        wrapperStyle={{ border: "none" }}
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
      ></CustomSection>

    </>

  )
}

export default SearchByCategoryClient