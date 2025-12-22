"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { StoreAdT } from '@/types/common.types';
import React from 'react'
import SimpleDealHoverItem from '@/components/features/product/item/SimpleDealHoverItem';

interface SimpleDealHoverV2Props {
  initialData?: StoreAdT[];
}

function SimpleDealHoverV2Client({ initialData }: SimpleDealHoverV2Props) {
  return (
    <>
      <CustomSectionV2
        title='Best Value'
        hasNavigation={true}
        items={initialData}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        wrapperStyle={{
          border: "none"
        }}

        renderItem={(item, index) => (
          <SimpleDealHoverItem item={item} ></SimpleDealHoverItem>
        )}
      ></CustomSectionV2>
    </>
  )
}

export default SimpleDealHoverV2Client