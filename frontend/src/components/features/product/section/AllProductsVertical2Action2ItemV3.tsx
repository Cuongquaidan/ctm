import { getAllCategories } from '@/lib/api/category';
import { getAllProducts } from '@/lib/api/product';
import { CategoryT, CategoryTV0, ProductT } from '@/types/common.types'
import React from 'react'
import AllProductsVertical2Action2ItemV3Client from '@/components/features/product/section/AllProductsVertical2Action2ItemV3.client';
interface AllProductsVertical2Action2ItemV3Props {
  initialData?: ProductT[];
}
async function AllProductsVertical2Action2ItemV3({ initialData }: AllProductsVertical2Action2ItemV3Props) {
  let data = initialData || await getAllProducts();
  const categories = await getAllCategories();
  return (
    <AllProductsVertical2Action2ItemV3Client initialData={data} categories={categories as unknown as CategoryTV0[]}></AllProductsVertical2Action2ItemV3Client>
  )
}

export default AllProductsVertical2Action2ItemV3