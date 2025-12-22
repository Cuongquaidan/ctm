"use client"
import { chunk } from '@/lib/helper'
import React, { useEffect, useState } from 'react'
import { ProductT } from '@/types/common.types'
import CustomSection from '@/components/ui/CustomSection'
import HorizontalProduct from '@/components/features/product/item/HorizontalProduct'

interface HorizontalItemSectionClientProps {
  initialData?: ProductT[];
  title?: string;
  description?: string;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };
  hasIcon?: boolean;
  hasNavigation?: boolean;
  link?: string;
  startDate?: Date;
  endDate?: Date;
  wrapperStyle?: React.CSSProperties;
  n: number;
  classOfColumn?: string;
  hasUnderline?: boolean;
}

function HorizontalItemSectionClient({ initialData, link, startDate, endDate, hasIcon, hasNavigation, title, description, breakpoints, wrapperStyle, n, classOfColumn, hasUnderline }: HorizontalItemSectionClientProps) {
  const groupedData = chunk(initialData || [], n);

  return (
    <>
      <section className='product-section-2'>
        <CustomSection<ProductT[]>
          items={groupedData}
          hasNavigation={hasNavigation}
          breakpoints={breakpoints}
          description={description}
          title={title}
          link={link}
          startDate={startDate}
          endDate={endDate}
          wrapperStyle={wrapperStyle}
          hasIcon={hasIcon}
          hasUnderline={hasUnderline}
          renderItem={(item, index) => (
            <div key={index} className={` d-flex flex-column gap-3 items-center justify-center ${classOfColumn || ''}`}>
              {item.map((product, idx) => (
                <HorizontalProduct
                  key={idx}
                  product={product}
                />
              ))}

            </div>
          )}
        ></CustomSection>
      </section>
    </>
  )
}

export default HorizontalItemSectionClient