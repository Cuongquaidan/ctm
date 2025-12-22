import React from 'react'
import CategoryMenuItem from '@/components/features/category/CategoryMenuItem'
import { CategoryT, CategoryTV0 } from '@/types/common.types'
import { getAllCategories, getAllCategoriesByUrl } from '@/lib/api/category'

interface CategoryMenuProps {
  title?: string
  initialData?: CategoryT[] | CategoryTV0[],
  uri?: string,
  id?: number[]
}

async function CategoryMenu({ title, initialData, uri, id }: CategoryMenuProps) {
  // const data = initialData || await fetch(url as string).then(res => res.ok ? res.json() : []).catch(() => []) as CategoryTV0[];
  const data = uri ? await getAllCategoriesByUrl(uri, id) : [];
  const dataToUse = initialData && initialData.length ? initialData : data;
  if (!dataToUse || dataToUse.length === 0) {
    return null;
  }

  return (
    <div className="category-menu ">
      <h3>
        {title}
      </h3>
      <ul className="pb-2 border-bottom-0" >
        {dataToUse.map((item, index) => (
          <CategoryMenuItem key={index} item={item as CategoryT} index={index} />
        ))}
      </ul>
    </div>
  )
}

export default CategoryMenu