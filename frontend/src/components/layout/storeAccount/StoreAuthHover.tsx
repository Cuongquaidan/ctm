'use client'
import LordIcon from '@/components/ui/icons/LordIcon'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

function StoreAuthHover() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <li
      ref={dropdownRef}
      className='right-side onhover-dropdown'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

    >
      <div className='delivery-login-box'>
        <div className='delivery-icon'>
          <button type='button' className='btn p-0 header-icon'>
            <LordIcon
              icon={require('@/assets/lordicon/ljvjsnvh.json')}
              primary='#f58233'
              secondary='#f58233'
              size={30}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='onhover-div onhover-div-login' style={{
          width: '220px',

        }}>
          <ul className='user-box-name'>
            <li className='mb-1'>
              <Link href='/customers/login'>
                <i className='me-2 fa-solid fa-cart-shopping'></i>
                Mua hàng
              </Link>
            </li>
            <li className='mb-1'>
              <Link href='/storeAccount/login'>
                <i className='me-2 fa-solid fa-right-to-bracket'></i>
                Đăng nhập Bán hàng
              </Link>
            </li>
            <li className='mb-1'>
              <Link href='/storeAccount/register'>
                <i className='me-2 fa-solid fa-user-plus'></i>
                Đăng ký Bán hàng
              </Link>
            </li>
            <li>
              <Link href='/storeAccount/forgotPassword'>
                <i className='me-2 fa-solid fa-lock'></i>
                Quên mật khẩu Bán hàng
              </Link>
            </li>
          </ul>
        </div>
      )}
    </li>
  )
}

export default StoreAuthHover