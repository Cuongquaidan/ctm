"use client";
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { ProductT } from '@/types/common.types';
import React from 'react'
import HorizontalProductBox4Action from '../item/HorizontalProductBox4Action';
interface HorizontalNItems4ActionsSectionClientProps {
  title?: string;
  initialData: ProductT[];
  n: number;
}

function HorizontalNItems4ActionsSectionClient({ initialData, title, n }: HorizontalNItems4ActionsSectionClientProps) {
  const groupedData: ProductT[][] = [];
  for (let i = 0; i < initialData.length; i += n) {
    groupedData.push(initialData.slice(i, i + n));
  }
  return (
    <CustomSectionV2<ProductT[]>
      items={groupedData}
      title={title}
      hasNavigation={true}
      hasIcon={false}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }}
      wrapperStyle={{
        padding: "10px"
      }}
      renderItem={(item, index) => (
        <div key={index} className="mb-3 d-flex flex-column gap-3 items-center justify-center">
          {item.map((product, idx) => (
            <HorizontalProductBox4Action
              key={idx}
              product={product}
            />
          ))}

        </div>
      )}
    ></CustomSectionV2>

  )
}

export default HorizontalNItems4ActionsSectionClient