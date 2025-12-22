"use client"
import React, { useState } from 'react'
import VerticalNavigationItem from '@/components/features/header/VerticalNavigationItem';

function VerticalNavigation({ initialData, isShow, setIsShow }: { initialData?: any[], isShow?: boolean, setIsShow?: (value: boolean) => void }) {
  const [data, setData] = useState<any[]>(initialData || []);
  return (
    <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky" style={{ width: '100%', zIndex: 9999 }}>
      <div className={`offcanvas offcanvas-collapse order-xl-2 ${isShow ? "show" : ""} !shadow-none`} id="primaryMenu"
        style={{ visibility: isShow ? 'visible' : 'hidden' }}
      >
        <div className="offcanvas-header navbar-shadow">
          <h5>Menu</h5>
          <button className="btn-close lead" type="button"
            data-bs-dismiss="offcanvas" onClick={() => setIsShow && setIsShow(false)}></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {data.map((item: any, index: number) => (
              <VerticalNavigationItem key={index} title={item.title} items={item.children} isMega={item.isMega || false}></VerticalNavigationItem>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VerticalNavigation