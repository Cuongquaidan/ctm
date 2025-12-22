import { CategoryTV0 } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import Link from 'next/link'
import React from 'react'

interface CategoryItemHasActionProps {
  item: CategoryTV0
}
function CategoryItemHasAction({ item }: CategoryItemHasActionProps) {
  return (
    <div className="category-box-list">
      <Link href={item.link} className="category-name">
        <h4>{item.name}</h4>
        <h6>{item.totalItems} items</h6>
      </Link>
      <div className="category-box-view">
        <Link href={item.link}>
          <ImageError width={400} height={400} src={item.image}
            className="img-fluid lazyload" alt={item.name} />
          <button className="btn shop-button">
            <span>Shop Now</span>
            <i className="fas fa-angle-right"></i>
          </button>
        </Link>

      </div>
    </div>
  )
}

export default CategoryItemHasAction