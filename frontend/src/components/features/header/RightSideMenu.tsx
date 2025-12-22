"use client"
import React from 'react'
import RightSideSupport from '@/components/features/header/RightSideSupport'
import RightSideCartHoverButton from '@/components/features/header/RightSideCartHoverButton'
import RightSideWishListButton from '@/components/features/header/RightSideWishListButton'
import RightSideUser from '@/components/features/header/RightSideUser'

function RightSideMenu({ hasSupport = true }: { hasSupport?: boolean }) {
  return (
    <div className='rightside-menu'>
      <ul className="option-list-2 al" >
        <li className="right-side">
          <div className="delivery-login-box">
            <div className="delivery-icon">
              <div className="search-box p-0">
                <i data-feather="search"></i>
              </div>
            </div>
          </div>
        </li>

        {hasSupport && <RightSideSupport></RightSideSupport>}
        <RightSideWishListButton></RightSideWishListButton>
        <RightSideCartHoverButton></RightSideCartHoverButton>
        <RightSideUser></RightSideUser>
      </ul>
    </div>
  )
}

export default RightSideMenu