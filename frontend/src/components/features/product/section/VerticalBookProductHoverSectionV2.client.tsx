"use client"
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { BookT } from '@/types/common.types';
import React from 'react'
import BookItem from '../item/BookItem';
interface VerticalBookProductHoverSectionV2ClientProps {
  title?: string;
  description?: string;
  breakpoints?: any;
  startDate?: Date;
  endDate?: Date;
  data: BookT[];
  hasIcon?: boolean;
  n: number;
  wrapperStyle?: React.CSSProperties;
  classOfItem?: string;
}
function VerticalBookProductHoverSectionV2Client({ title, description, n, startDate, endDate, hasIcon, data, breakpoints = {
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
}, wrapperStyle, classOfItem }: VerticalBookProductHoverSectionV2ClientProps) {
  const groupedData: BookT[][] = [];
  for (let i = 0; i < data.length; i += n) {
    groupedData.push(data.slice(i, i + n));
  }

  return (
    <>
      <CustomSectionV2<BookT[]>
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
                <BookItem
                  book={product}
                  key={index * n + idx}
                ></BookItem>
              ))}
            </div>
          )


        }}

      ></CustomSectionV2>
    </>
  )
}

export default VerticalBookProductHoverSectionV2Client