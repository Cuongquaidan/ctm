import Footer from '@/components/features/footer/Footer'
import HeaderStoreAuth from '@/components/layout/storeAccount/HeaderStoreAuth'
import HeaderNavMobile from '@/components/features/mobile/nav/HeaderNavMobile'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>

      <HeaderStoreAuth ></HeaderStoreAuth>
      <>

        {children}

      </>
      <Footer></Footer>
    </>
  )
}

export default layout