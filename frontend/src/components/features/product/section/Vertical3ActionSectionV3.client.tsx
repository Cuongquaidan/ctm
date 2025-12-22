"use client"
import CustomSectionV3 from '@/components/ui/CustomSectionV3';
import { CategoryT, CategoryTV0, ProductT } from '@/types/common.types';
import React from 'react'
import VerticalProductHoverV2 from '@/components/features/product/item/VerticalProductHoverV2';

interface Vertical3ActionSectionV3ClientProps {
  initialData: ProductT[];
  categories?: CategoryTV0[];
  title?: string;
  description?: string;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };

}
function Vertical3ActionSectionV3Client({ initialData, categories, title, description, breakpoints }: Vertical3ActionSectionV3ClientProps) {

  return (
    <CustomSectionV3<ProductT>
      title={title}
      items={initialData}
      categories={categories}
      breakpoints={breakpoints}
      description={description}
      wrapperStyle={{
        border: "none"
      }}
      renderItem={(item, index) => (
        <div className='d-flex flex-column gap-2 border rounded-2xl' key={index}>
          <VerticalProductHoverV2 index={index} product={item} className='border-0' />
        </div>
      )}
    ></CustomSectionV3>
  )
}

export default Vertical3ActionSectionV3Client