"use client"
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import HeaderStore from '@/components/features/header/HeaderStore'
import RightSideNavTop from '@/components/features/header/RightSideNavTop'
import HeaderNavLeft from '@/components/features/header/HeaderNavLeft'
import { useConfig } from '@/components/features/provider/ConfigProvider';
import HeaderSearchMain from '@/components/features/header/HeaderSearchMain'
import { fixedSiteConfig } from '@/lib/api/config'

function NavTop() {
  const { config } = useConfig();
  return (
    <nav className="top-nav top-header sticky-header d-none d-md-block py-0" style={{
      zIndex: 1001
    }}>
      <div className="container-fluid-lg py-2">
        <div className="row">
          <div className="col-12">
            <div className="navbar-top" style={{
              zIndex: 1001
            }}>
              {
                config?.logo || fixedSiteConfig?.logo && (<a href="/" className="web-logo nav-logo d-md-block d-none me-xl-4 me-3">
                  {(config?.logo || fixedSiteConfig?.logo) && (
                    <ImageError width={400} height={400} src={config?.logo || fixedSiteConfig?.logo as string} className="img-fluid lazyload" alt={config?.name_1 || "Honey net"} />
                  )}
                </a>)
              }
              <div className="middle-box flex-fill">
                <div className="header-nav me-3">
                  <HeaderNavLeft></HeaderNavLeft>

                </div>
                <HeaderStore></HeaderStore>
                {/* <LocationSearchBox></LocationSearchBox> */}
                <HeaderSearchMain></HeaderSearchMain>
              </div>
              <RightSideNavTop></RightSideNavTop>
            </div>
            {/* <div className='header-nav-middle'>
              <VerticalNavigation initialData={menuData}></VerticalNavigation>
            </div> */}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default NavTop