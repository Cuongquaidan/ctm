
import React from 'react'
import HeaderTop from '@/components/features/header/HeaderTop'
import NavTopStoreAuth from '@/components/layout/storeAccount/NavTopStore'
import HeaderNavMobile from '@/components/features/mobile/nav/HeaderNavMobile'



function HeaderStoreAuth() {
  return (

    <header className="pb-0">
      <HeaderTop />
      <NavTopStoreAuth />
    </header>

  )
}

export default HeaderStoreAuth