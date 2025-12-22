"use client"
import React from 'react'
import HeaderSearchMain from '@/components/features/header/HeaderSearchMain'
import { useConfig } from '@/components/features/provider/ConfigProvider'
import Link from 'next/link';
import { Headset, Menu } from 'lucide-react';
import VerticalNavigation from '@/components/features/header/VerticalNavigation';
import RightSideNavTop from '@/components/features/header/RightSideNavTop';
import LocationSearchBoxV2 from '@/components/features/header/LocationSearchBoxV2';
import { menuData } from '@/assets/data/Config';
import RightSideSupport from '@/components/features/header/RightSideSupport';
import RightSideMenu from '@/components/features/header/RightSideMenu';
import { fixedSiteConfig } from '@/lib/api/config';

function HeaderV5() {
  const { config } = useConfig();
  return (
    <header className="header-3">
      <div className="top-nav sticky-header sticky-header-2">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="navbar-top">
                <div className='d-flex items-center gap-2'>
                  <button className="navbar-toggler d-xl-none d-block p-0 me-3" type="button"
                    data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                    <span className="navbar-toggler-icon">
                      <Menu />
                    </span>
                  </button>
                  {(config.logo || fixedSiteConfig.logo) && (
                    <Link href="/" className="web-logo nav-logo">
                      <img src={config.logo || fixedSiteConfig.logo as string} className="img-fluid  lazyload" alt={config.description_1} />
                    </Link>
                  )}

                  {/* <HeaderSearchMain></HeaderSearchMain> */}

                  <div className="middle-box">
                    <div className="center-box">
                      <div className='d-none d-xl-block'>
                        <LocationSearchBoxV2></LocationSearchBoxV2>
                      </div>
                      <div className="searchbar-box-2 input-group d-xl-flex d-none">
                        <button className="btn search-icon" type="button">
                          <i className="iconly-Search icli"></i>
                        </button>
                        <input type="text" className="form-control"
                          style={{
                            height: "60px"
                          }}
                          placeholder="Search for products, styles,brands..." />
                        <button className="btn search-button" type="button">Search</button>
                      </div>
                    </div>
                  </div>
                </div>

                <RightSideSupport color='white' sizePhone="40px"></RightSideSupport>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="main-nav nav-left-align">
              <VerticalNavigation initialData={menuData}></VerticalNavigation>

              {/* <RightSideNavTop></RightSideNavTop> */}
              <RightSideMenu hasSupport={false}></RightSideMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderV5