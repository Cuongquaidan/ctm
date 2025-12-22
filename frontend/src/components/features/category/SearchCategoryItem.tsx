import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { CategoryT, CategoryTV0 } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

interface SearchCategoryItemProps {
  item: CategoryT;
}

function SearchCategoryItem({ item }: SearchCategoryItemProps) {
  return (
    <div className="wow fadeIn shrink-0 "
      style={{
        width: "174px",
        height: "152px"
      }}
    >
      <a href={item.alias} className="category-box category-dark">
        <div>
          <ImageError width={400} height={400} src={item.image ? IMAGES_BASE_URL + "/" + item.image : '/images/logo.png'}
            data-src={item.image ? IMAGES_BASE_URL + "/" + item.image : '/images/logo.png'} className="lazyload" alt={item.name} />
          <div className="name">{item.name}</div>
        </div>
      </a>
    </div>
  )
}

export default SearchCategoryItem