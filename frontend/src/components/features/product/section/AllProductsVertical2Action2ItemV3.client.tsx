"use client"
import CustomSectionV3 from '@/components/ui/CustomSectionV3';
import { CategoryT, CategoryTV0, ProductT } from '@/types/common.types';
import React from 'react'
import VerticalProduct2Actions from '@/components/features/product/item/VerticalProduct2Actions';

interface AllProductsVertical2Action2ItemV3ClientProps {
  initialData: ProductT[];
  categories?: CategoryTV0[];
}
function AllProductsVertical2Action2ItemV3Client({ initialData, categories }: AllProductsVertical2Action2ItemV3ClientProps) {
  const groupedData: ProductT[][] = [];
  if (initialData && initialData.length > 0) {
    for (let i = 0; i < initialData.length; i += 2) {
      const group = [initialData[i]]; // Lấy item đầu tiên (0, 2, 4...)
      if (initialData[i + 1]) {
        group.push(initialData[i + 1]); // Lấy item thứ hai (1, 3, 5...)
      }
      groupedData.push(group); // Thêm cặp [item1, item2] hoặc [item1]
    }
  }
  return (
    <CustomSectionV3<ProductT[]>
      title="Our Products"
      items={groupedData}
      categories={categories}
      renderItem={(item, index) => (
        <div className='d-flex flex-column gap-2' key={index}>
          <VerticalProduct2Actions item={item[0]} />
          <VerticalProduct2Actions item={item[1]} />
        </div>
      )}
    ></CustomSectionV3>
  )
}

export default AllProductsVertical2Action2ItemV3Client