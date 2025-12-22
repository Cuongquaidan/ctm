"use client"
import LordIcon from '@/components/ui/icons/LordIcon'
import Link from 'next/link'
import React from 'react'
import { useAuthContext } from '../provider/AuthProvider'

function RightSideWishListButton() {
  const { hasAuth, numberOfItemsInWishlist } = useAuthContext();
  return (
    <li className="right-side">
      <Link href="/customers/wishlist" className="btn p-0 position-relative header-wishlist header-icon boxWishlist" aria-label="Sản phẩm yêu thích">
        {/* <lord-icon src="/assets/eme2023/lordicon/ytuosppc.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#f58233"></lord-icon> */}
        <LordIcon icon={require("@/assets/lordicon/ytuosppc.json")} primary="var(--theme-color)" secondary="var(--theme-color)"></LordIcon>
        {hasAuth && (<span className="position-absolute top-0 start-100 translate-middle badge shoppingWishlist"><span className="numberWishlist w-5 h-5 p-1"
          style={{
            backgroundColor: "#ff7272"
          }}
        >{numberOfItemsInWishlist || 0}</span>
          <span className="visually-hidden">unread messages</span>
        </span>)}
      </Link>
    </li>
  )
}

export default RightSideWishListButton