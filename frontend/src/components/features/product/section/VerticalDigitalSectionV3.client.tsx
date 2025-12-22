"use client"
import CustomSectionV3 from '@/components/ui/CustomSectionV3';
import { CategoryT, ProductT } from '@/types/common.types';
import React from 'react'
import VerticalProductHoverV2 from '@/components/features/product/item/VerticalProductHoverV2';
import DigitalProduct from '../item/DigitalProduct';
import { DigitalProductT } from '@/app/(sites)/extras/index11/page';

interface VerticalDigitalSectionV3ClientProps {
  initialData: DigitalProductT[];
  categories?: {
    name: string;
    link: string;
    image: string;
    slug: string;
  }[];
  title?: string;
  description?: string;
  n: number;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };

}
function VerticalDigitalSectionV3Client({ initialData, categories, title, description, breakpoints, n }: VerticalDigitalSectionV3ClientProps) {
  let groupedData = []
  for (let i = 0; i < initialData.length; i += n) {
    groupedData.push(initialData.slice(i, i + n));
  }

  return (
    <CustomSectionV3<DigitalProductT[]>
      title={title}
      items={groupedData}
      categories={categories}
      breakpoints={breakpoints}
      description={description}
      wrapperStyle={{
        border: "none"
      }}
      renderItem={(item, index) => (
        <div className='d-flex flex-column gap-4  rounded-2xl' key={index}>
          {item.map((product, idx) => (
            <DigitalProduct
              key={index * n + idx}
              item={product}
            />
          ))}
        </div>
      )}
    ></CustomSectionV3>
  )
}

export default VerticalDigitalSectionV3Client