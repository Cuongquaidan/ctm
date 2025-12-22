
import MiniFooter from '@/components/features/footer/MiniFooter'
import HeaderV8 from '@/components/features/header/HeaderV8'
import { ChartBarStacked, Handbag, Heart, House, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-color-4">
      <HeaderV8></HeaderV8>
      <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
          <li className="active">
            <Link href="/" className='d-flex flex-col items-center justify-center'>
              <House className='text-white' />
              <span>Home</span>
            </Link>
          </li>

          <li className="mobile-category">
            <Link href="/" className='d-flex flex-col items-center justify-center'>
              <ChartBarStacked className='text-white' />
              <span>Category</span>
            </Link>
          </li>

          <li>
            <Link href="/search" className='d-flex flex-col items-center justify-center'>
              <Search className='text-white' />
              <span>Search</span>
            </Link>
          </li>

          <li>
            <Link href="/wishlist" className="notifi-wishlist d-flex flex-col items-center justify-center">
              <Heart className='text-white' />
              <span>My Wish</span>
            </Link>
          </li>

          <li>
            <Link href="/cart" className='d-flex flex-col items-center justify-center'>
              <Handbag className='text-white' />
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
      {children}
      <MiniFooter></MiniFooter>
    </div>
  )
}

export default layout