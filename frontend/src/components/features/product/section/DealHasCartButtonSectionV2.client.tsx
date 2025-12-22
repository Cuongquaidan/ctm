"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { ProductT, StoreAdT } from '@/types/common.types';
import React from 'react'
import SimpleDealHoverItem from '@/components/features/product/item/SimpleDealHoverItem';
import DealHasCartButtonItem from '@/components/features/product/item/DealHasCartButtonItem';

interface DealHasCartButtonSectionClientV2Props {
  initialData?: ProductT[];
}

function DealHasCartButtonSectionClientV2({ initialData }: DealHasCartButtonSectionClientV2Props) {
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
          <DealHasCartButtonItem item={item} ></DealHasCartButtonItem>
        )}
      ></CustomSectionV2>
    </>
  )
}

export default DealHasCartButtonSectionClientV2