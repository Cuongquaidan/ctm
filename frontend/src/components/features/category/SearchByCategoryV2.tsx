
import { getAllCategoriesByUrl, getAllCategoriesV2 } from '@/lib/api/category'
import React from 'react'
import SearchByCategoryV2Client from '@/components/features/category/SearchByCategoryV2.client';
import { CategoryT, CategoryTV0 } from '@/types/common.types';
interface SearchByCategoryV2Props {
  initialData?: CategoryTV0[];
  uri?: string;
  hasIcon?: boolean;
  hasNavigation?: boolean;
  title?: string;
  description?: string;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  }
}
async function SearchByCategoryV2(
  { initialData, uri, hasIcon, hasNavigation, title, description, breakpoints }: SearchByCategoryV2Props
) {
  // const data = uri ? await getAllCategoriesByUrl(uri) : [];
  const data = [] as CategoryTV0[];
  const dataToUse = initialData && initialData.length ? initialData : data;
  if (!dataToUse || dataToUse.length === 0) {
    return null;
  }

  return (
    <>
      <SearchByCategoryV2Client items={dataToUse}
        hasIcon={hasIcon}
        hasNavigation={hasNavigation}
        title={title}
        description={description}
        breakpoints={breakpoints}
      ></SearchByCategoryV2Client>
    </>

  )
}

export default SearchByCategoryV2
