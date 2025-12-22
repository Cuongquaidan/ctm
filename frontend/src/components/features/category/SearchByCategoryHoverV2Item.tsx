import { CategoryTV0 } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

interface SearchByCategoryHoverV2ItemProps {
  index?: number
  item: CategoryTV0
}
function SearchByCategoryHoverV2Item({ item, index = 0 }: SearchByCategoryHoverV2ItemProps) {
  return (
    <div className="shop-category-box border-0 wow fadeIn "

    >
      <a className={`circle-${index % 4 + 1}`}>
        <ImageError
          style={{
            width: "60%",
            aspectRatio: 110 / 98
          }}
          src={item.image} className="img-fluid  lazyload object-cover" width={330} height={294} alt={item.name}></ImageError>
      </a>
      <div className="category-name">
        <h6>{item.name}</h6>
      </div>
    </div>
  )
}

export default SearchByCategoryHoverV2Item