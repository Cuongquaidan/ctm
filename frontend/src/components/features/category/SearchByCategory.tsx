
import { categoryMenuData } from '@/assets/data/Home'
import React from 'react'
import SearchCategoryItem from '@/components/features/category/SearchCategoryItem'
import 'swiper/css';
import 'swiper/css/navigation';
import CustomSection from '@/components/ui/CustomSection';
import { CategoryT, CategoryTV0 } from '@/types/common.types';
import { getAllCategoriesByUrl } from '@/lib/api/category';
import SearchByCategoryClient from '@/components/features/category/SearchByCategory.client';
interface SearchByCategoryProps {
  title?: string
  description?: string
  initialData?: CategoryT[],
  uri?: string,
  id?: number[]
}
async function SearchByCategory({
  title, description, initialData, uri, id
}: SearchByCategoryProps) {

  const data = uri ? await getAllCategoriesByUrl(uri, id) : [];
  const dataToUse = initialData && initialData.length ? initialData : data;
  if (!dataToUse || dataToUse.length === 0) {
    return null;
  }
  return (
    <>

      <SearchByCategoryClient
        items={dataToUse}
        title={title}
        description={description}
      ></SearchByCategoryClient>

    </>

  )
}

export default SearchByCategory