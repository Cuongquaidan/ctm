'use client';
import React from 'react'
import SearchCategoryItem from '@/components/features/category/SearchCategoryItem'
import 'swiper/css';
import 'swiper/css/navigation';
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { CategoryT, CategoryTV0 } from '@/types/common.types';
interface SearchByCategoryV2ClientProps {
  items: CategoryTV0[];
  hasIcon?: boolean;
  hasNavigation?: boolean;
  title?: string;
  description?: string;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  }
}
function SearchByCategoryV2Client({ items, hasIcon, hasNavigation, title, description, breakpoints }: SearchByCategoryV2ClientProps) {
  return (
    <>

      <CustomSectionV2<CategoryTV0>
        breakpoints={breakpoints || {
          640: { slidesPerView: 5, spaceBetween: 10 },
          768: { slidesPerView: 7, spaceBetween: 15 },
          1280: { slidesPerView: 9, spaceBetween: 20 },
        }}
        items={items}
        title={title} description={description}
        hasNavigation={hasNavigation}
        hasIcon={hasIcon}
        renderItem={(item, index) => (<SearchCategoryItem item={item as unknown as CategoryT} key={index} />)}
        wrapperStyle={{ border: "none" }}
      ></CustomSectionV2>

    </>

  )
}

export default SearchByCategoryV2Client
