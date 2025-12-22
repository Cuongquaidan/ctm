"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { ProductT } from '@/types/common.types';
import React from 'react'
import VerticalProductHoverV3 from '@/components/features/product/item/VerticalProductHoverV3';
interface VerticalProductHoverSectionV3ClientProps {
  title?: string;
  description?: string;
  breakpoints?: any;
  startDate?: Date;
  endDate?: Date;
  data: ProductT[];
  hasIcon?: boolean;
  n: number;
  hasNavigation?: boolean;
  wrapperStyle?: React.CSSProperties;
  classOfItem?: string;
}
function VerticalProductHoverSectionV3Client({ title, description, n, startDate, endDate, hasIcon, data, hasNavigation, breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 0
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 0
  },
  1280: {
    slidesPerView: 6,
    spaceBetween: 0
  }
}, wrapperStyle, classOfItem }: VerticalProductHoverSectionV3ClientProps) {
  const groupedData: ProductT[][] = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i += n) {
      groupedData.push(data.slice(i, i + n));

    }
  }

  return (
    <>
      <CustomSectionV2<ProductT[]>
        items={groupedData}
        title={title}
        description={description}
        breakpoints={breakpoints}
        wrapperStyle={{
          borderRadius: "8px",
          overflow: "hidden",
          ...wrapperStyle
        }}
        hasIcon={hasIcon}
        startDate={startDate}
        endDate={endDate}
        hasNavigation={hasNavigation}
        isLoop={true}
        slidesStep={1}
        autoplay={true}
        delay={2500}
        renderItem={(item, index) => {
          return (
            <div className='d-flex flex-col gap-2'>
              {item.map((product, idx) => (
                <VerticalProductHoverV3 index={index * n + idx} product={product} key={index * n + idx}
                  className={classOfItem}
                ></VerticalProductHoverV3>
              ))}
            </div>
          )


        }}

      ></CustomSectionV2>
    </>
  )
}

export default VerticalProductHoverSectionV3Client