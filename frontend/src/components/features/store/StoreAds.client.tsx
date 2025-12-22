"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2'
import { StoreAdT } from '@/types/common.types'
import React from 'react'
import StoreAdItem from '@/components/features/store/StoreAdItem'

function StoreAdsClient({ items }: { items: StoreAdT[] }) {
  return (
    <CustomSectionV2<StoreAdT>
      items={items}
      hasIcon={false}
      wrapperStyle={{
        border: 0
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }}
      renderItem={(item, index) => (
        <StoreAdItem item={item} key={index} />
      )}

    />
  )
}

export default StoreAdsClient