"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { getFeaturedProducts } from '@/lib/api/product';
import { ProductT } from '@/types/common.types';
import React, { useEffect, useState } from 'react'
import HorizontalProductNoAction from '@/components/features/product/item/HorizontalProductNoAction';

interface HorizontalNItemsSectionV2ClientProps {
  n: number;
  initialData: ProductT[];
  title?: string;
  description?: string;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    }
  }
  startDate?: Date;
  endDate?: Date;
  hasIcon?: boolean;
  hasNavigation?: boolean;
}
function HorizontalNItemsSectionV2Client({ n, initialData, title, description, breakpoints, startDate, endDate, hasIcon, hasNavigation }: HorizontalNItemsSectionV2ClientProps) {

  const groupedData: ProductT[][] = [];
  if (initialData && initialData.length > 0) {
    for (let i = 0; i < initialData.length; i += n) {
      const group = [initialData[i]]; // Lấy item đầu tiên (0, 3, 6...)
      for (let j = 1; j < n; j++) {
        if (initialData[i + j]) {
          group.push(initialData[i + j]); // Lấy các item tiếp theo (1,2  4,5  7,8...)
        }
      }
      groupedData.push(group); // Thêm nhóm [item1, item2, item3] hoặc ít hơn nếu không đủ
    }
  }

  return (
    <div className='product-section-2'>
      <CustomSectionV2<ProductT[]>
        items={groupedData}
        title={title || 'Tất Cả Sản Phẩm'}
        hasIcon={hasIcon}
        hasNavigation={hasNavigation}
        breakpoints={breakpoints || {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }}
        description={description}
        wrapperStyle={{
          border: "none"
        }}
        startDate={startDate}
        endDate={endDate}
        renderItem={(item, index) => {
          return (
            <div className='d-flex flex-col gap-2'>
              {item.map((product, idx) => (
                <HorizontalProductNoAction product={product} key={idx} />
              ))}
            </div>
          )


        }}

      ></CustomSectionV2>
    </div>
  )
}

export default HorizontalNItemsSectionV2Client