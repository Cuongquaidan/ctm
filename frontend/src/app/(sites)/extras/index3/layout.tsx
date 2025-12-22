import Footer from '@/components/features/footer/FooterHasServices'
import HeaderIndex1 from '@/components/features/header/HeaderV2'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-color-2">
      <HeaderIndex1></HeaderIndex1>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default layout