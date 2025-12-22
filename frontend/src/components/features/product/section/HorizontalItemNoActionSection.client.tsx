"use client"
import { chunk } from '@/lib/helper'
import React from 'react'
import { ProductT } from '@/types/common.types'
import CustomSection from '@/components/ui/CustomSection'
import HorizontalProductNoAction from '@/components/features/product/item/HorizontalProductNoAction'

interface HorizontalItemSectionNoActionClientProps {
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
  classOfColumn?: string;
  hasUnderline?: boolean;
  n: number;
  classOfItem?: string;
  classOfImg?: string;
}

function HorizontalItemSectionNoActionClient({ initialData, link, startDate, endDate, hasIcon, hasNavigation, title, description, breakpoints, wrapperStyle, classOfColumn, n, hasUnderline, classOfItem, classOfImg }: HorizontalItemSectionNoActionClientProps) {
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
            <div key={index} className={`mb-3 d-flex flex-column gap-3 items-center justify-center ${classOfColumn || ''}`}>
              {item.map((product, idx) => (
                <HorizontalProductNoAction
                  classOfItem={classOfItem}
                  classOfImg={classOfImg}
                  key={index * n + idx}
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

export default HorizontalItemSectionNoActionClient