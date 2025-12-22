"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { ProductT } from '@/types/common.types';
import React from 'react'
import VerticalProduct from '@/components/features/product/item/VerticalProduct';


interface VerticalNItemsClientProps {
  initialData: ProductT[]
  title?: string,
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    }
  },
  description?: string,
  startDate?: Date,
  endDate?: Date,
  n: number,
  hasIcon?: boolean,
  wrapperStyle?: React.CSSProperties,
  classOfItem?: string,
  hasNavigation?: boolean

}
function VerticalNItemsClient({ initialData, title, breakpoints, description, startDate, endDate, n, hasIcon, wrapperStyle, classOfItem, hasNavigation }: VerticalNItemsClientProps) {
  const groupedData: ProductT[][] = [];
  if (initialData && initialData.length > 0) {
    for (let i = 0; i < initialData.length; i += n) {
      const group: ProductT[] = [];
      for (let j = 0; j < n; j++) {
        if (initialData[i + j]) {
          group.push(initialData[i + j]); // Lấy item thứ hai (1, 3, 5...)
        }
        groupedData.push(group); // Thêm cặp [item1, item2] hoặc [item1]
      }
    }
  }

  return (
    <>
      <CustomSectionV2<ProductT[]>
        key={title || `horizontal-${Date.now()}`}
        items={groupedData}
        title={title}
        description={description}
        hasNavigation={hasNavigation}
        breakpoints={breakpoints || {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }}
        wrapperStyle={wrapperStyle}
        startDate={startDate}
        endDate={endDate}
        hasIcon={hasIcon}

        renderItem={(item, index) => {
          return (
            <div className='d-flex flex-col gap-2'>

              {
                item.map((product, idx) => (
                  <VerticalProduct key={index * n + idx} product={product} index={index * n + idx} className={classOfItem || 'border-0 bg-gray-100'} />
                ))
              }
            </div>
          )


        }}

      ></CustomSectionV2>
    </>
  )
}

export default VerticalNItemsClient