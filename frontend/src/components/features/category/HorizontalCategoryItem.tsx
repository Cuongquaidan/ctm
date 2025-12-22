"use client"
import React from 'react'
import Link from 'next/link'
import { HorizontalCategoryItemT } from '@/assets/data/HorizontalCategory'
import ImageError from '@/components/ui/ImageError'

interface HorizontalCategoryItemProps {
  item: HorizontalCategoryItemT
}

function HorizontalCategoryItem({ item }: HorizontalCategoryItemProps) {
  return (
    <li className="onhover-category-list">
      <Link href={`/category/${item.slug}`} className="category-name">
        <ImageError width={300} height={300} src={item.icon} alt={item.name} />
        <h6>{item.name}</h6>
        <i className="fa-solid fa-angle-right"></i>
      </Link>

      {item.subcategories && item.subcategories.length > 0 && (
        <div className={`onhover-category-box hide-scrollbar ${item.subcategories.length === 1 ? 'w-100' : ''}`}>
          {item.subcategories.map((subcategory, index) => (
            <div key={index} className={`list-${index + 1} hide-scrollbar`}>
              <div className="category-title-box">
                <h5>{subcategory.title}</h5>
              </div>
              <ul>
                {subcategory.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={`/category/${item.slug}/${subItem.slug}`}>
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  )
}

export default HorizontalCategoryItem
