"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { ProductT } from '@/types/common.types';
import React from 'react'
import VerticalProductHoverV2 from '@/components/features/product/item/VerticalProductHoverV2';
interface VerticalProductHoverSectionV2ClientProps {
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
  classOfColumn?: string;
}
function VerticalProductHoverSectionV2Client({ title, description, n, startDate, endDate, hasIcon, data, breakpoints = {
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
}, wrapperStyle, classOfItem, classOfColumn }: VerticalProductHoverSectionV2ClientProps) {
  const groupedData: ProductT[][] = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i += n) {
      const group = [data[i]]; // Lấy item đầu tiên (0, 2, 4...)
      if (data[i + 1]) {
        group.push(data[i + 1]); // Lấy item thứ hai (1, 3, 5...)
      }
      groupedData.push(group); // Thêm cặp [item1, item2] hoặc [item1]
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
        isLoop={true}
        slidesStep={1}
        autoplay={true}
        delay={2500}
        renderItem={(item, index) => {
          return (
            <div className={`d-flex flex-col gap-2 ${classOfColumn}`}>
              {item.map((product, idx) => (
                <VerticalProductHoverV2 index={idx} product={product} key={product.id || idx}
                  className={classOfItem}
                ></VerticalProductHoverV2>
              ))}
            </div>
          )


        }}

      ></CustomSectionV2>
    </>
  )
}

export default VerticalProductHoverSectionV2Client