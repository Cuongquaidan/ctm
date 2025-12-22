"use client"
import { Grid2x2 } from 'lucide-react'
import React from 'react'

interface HorizontalCategoryButtonProps {
  onClick?: () => void
}

function HorizontalCategoryButton({ onClick }: HorizontalCategoryButtonProps) {
  return (
    <button className="dropdown-category" onClick={onClick}>
      <Grid2x2 style={{
        color: "var(--theme-color)",
        fontWeight: 400,
        marginRight: 8
      }} />
      <span>All Categories</span>
    </button>
  )
}

export default HorizontalCategoryButton
