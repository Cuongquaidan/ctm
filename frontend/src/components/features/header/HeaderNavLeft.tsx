"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import NavTopCategoryDropdown from '@/components/features/header/NavTopCategoryDropdown'
import CategoryMenuHorizontal from '@/components/features/category/CategoryMenuHorizontal'

const LordIcon = dynamic(() => import('@/components/ui/icons/LordIcon'), {
  ssr: false,
  loading: () => <div style={{ width: 30, height: 30, display: 'inline-block' }} />
})

function HeaderNavLeft() {
  return (
    <div className="header-nav-left hidden lg:block">
      <div className="dropdown-category">
        <LordIcon size={30} icon={require("@/assets/lordicon/dnoiydox.json")} primary="#ffffff" secondary="#ffffff"></LordIcon>
        {/* <lord-icon src="/assets/eme2023/lordicon/dnoiydox.json" stroke="100" trigger="loop-on-hover" colors="primary:#fff,secondary:#fff"></lord-icon> */}
        <span className="ms-1">Danh mục</span>
      </div>
      <NavTopCategoryDropdown></NavTopCategoryDropdown>


      {/* <CategoryMenuHorizontal></CategoryMenuHorizontal> */}

    </div>
  )
}

export default HeaderNavLeft