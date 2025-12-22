"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { CategoryTV0 } from '@/types/common.types';
import React from 'react'
import SearchByCategoryHoverV2Item from '@/components/features/category/SearchByCategoryHoverV2Item';

interface SearchByCategoryHoverV2ClientProps {
  initialData: CategoryTV0[];
}


function SearchByCategoryHoverV2Client({ initialData }: SearchByCategoryHoverV2ClientProps) {

  return (
    <CustomSectionV2
      items={initialData}
      title='Shop By Categories'
      hasNavigation={true}
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
          slidesPerView: 5,
          spaceBetween: 0
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 0
        },
        1600: {
          slidesPerView: 7,
          spaceBetween: 0
        },
        1800: {
          slidesPerView: 8,
          spaceBetween: 0
        }
      }}
      wrapperStyle={{
        border: "none",
        height: "150px"
      }}
      hasIcon={false}
      renderItem={(item, index) => (
        <SearchByCategoryHoverV2Item item={item} index={index} />
      )}
    ></CustomSectionV2>
  )
}

export default SearchByCategoryHoverV2Client