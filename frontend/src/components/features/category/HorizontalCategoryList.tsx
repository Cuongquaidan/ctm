"use client"
import React from 'react'
import HorizontalCategoryItem from '@/components/features/category/HorizontalCategoryItem'
import { horizontalCategoryData } from '@/assets/data/HorizontalCategory'

function HorizontalCategoryList() {
  return (
    <ul className="category-list hide-scrollbar">
      {horizontalCategoryData.map((item) => (
        <HorizontalCategoryItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default HorizontalCategoryList
