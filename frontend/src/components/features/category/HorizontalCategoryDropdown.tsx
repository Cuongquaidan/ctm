"use client"
import React from 'react'
import HorizontalCategoryList from '@/components/features/category/HorizontalCategoryList'

interface HorizontalCategoryDropdownProps {
  onClose?: () => void
}

function HorizontalCategoryDropdown({ onClose }: HorizontalCategoryDropdownProps) {
  return (
    <div className="category-dropdown hide-scrollbar hidden lg:block">
      <div className="category-title">
        <h5>Categories</h5>
        <button
          type="button"
          className="btn p-0 close-button text-content"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <HorizontalCategoryList />
    </div>
  )
}

export default HorizontalCategoryDropdown
