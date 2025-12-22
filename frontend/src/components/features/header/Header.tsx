"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import HeaderTop from '@/components/features/header/HeaderTop'
import NavTop from '@/components/features/header/NavTop'



function Header() {
  const [isActive, setIsActive] = useState(false)
  const headerTopRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (headerTopRef.current) {
        const headerTopHeight = headerTopRef.current.offsetHeight
        setIsActive(window.scrollY > headerTopHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (

    <header className={`pb-0 ${isActive ? 'active' : ''}`}>

      <HeaderTop ref={headerTopRef} />
      <NavTop />
    </header>

  )
}

export default Header