"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { ProductT } from '@/types/common.types';
import React from 'react'
import SimpleVerticalProductHover from '@/components/features/product/item/SimpleVerticalProductHover';
interface SimpleVerticalProductHoverSectionV2ClientProps {
  title?: string;
  description?: string;
  breakpoints?: any;
  startDate?: Date;
  endDate?: Date;
  data: ProductT[];
  hasIcon?: boolean;
  n: number;
  wrapperStyle?: React.CSSProperties;
  classOfItem?: string;
}
function SimpleVerticalProductHoverSectionV2Client({ title, description, n, startDate, endDate, hasIcon, data, breakpoints = {
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
}, wrapperStyle, classOfItem }: SimpleVerticalProductHoverSectionV2ClientProps) {
  const groupedData: ProductT[][] = [];
  for (let i = 0; i < data.length; i += n) {
    groupedData.push(data.slice(i, i + n));
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
        isLoop={true}
        slidesStep={1}
        autoplay={true}
        delay={2500}
        renderItem={(item, index) => {
          return (
            <div key={index} className="d-flex flex-column gap-3 items-center justify-center">
              {item.map((product, idx) => (
                <SimpleVerticalProductHover
                  key={index * n + idx}
                  product={product}
                  index={index * n + idx}
                  className={classOfItem}
                />
              ))}
            </div>
          )


        }}

      ></CustomSectionV2>
    </>
  )
}

export default SimpleVerticalProductHoverSectionV2Client