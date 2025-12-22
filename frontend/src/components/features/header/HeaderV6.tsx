"use client";
import React, { useState } from 'react'
import { menuData } from '@/assets/data/Config';
import VerticalNavigation from '@/components/features/header/VerticalNavigation';
import TimerNotifications from '@/components/features/notification/TimerNotifications';
import { useAuthContext } from '@/components/features/provider/AuthProvider';
import { useConfig } from '@/components/features/provider/ConfigProvider'
import ImageError from '@/components/ui/ImageError';
import DropdownSelectButtonCurrencies from '@/components/ui/button/DropdownSelectButtonCurrencies';
import DropdownSelectButtonLangs from '@/components/ui/button/DropdownSelectButtonLangs';
import RightSideMenu from '@/components/features/header/RightSideMenu';
import { fixedSiteConfig } from '@/lib/api/config';
function HeaderV6() {
  const { config } = useConfig();
  const { hasAuth, numberOfItemsInWishlist, numberOfStoreInCart, handleLogout } = useAuthContext();
  const [isOpenDeal, setIsOpenDeal] = useState<boolean>(false);
  return (
    <header className="header-2">



      <div className="header-top !text-sm">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 d-xxl-block d-none">
              <div className="top-left-header">
              </div>
            </div>

            <div className="col-xxl-6 col-lg-9 d-lg-block d-none">

              <TimerNotifications></TimerNotifications>
            </div>

            <div className="col-lg-3">
              <ul className="about-list right-nav-about">
                <li className="right-nav-list">
                  <DropdownSelectButtonLangs id='langs' items={fixedSiteConfig.langs}></DropdownSelectButtonLangs>
                </li>
                <li className="right-nav-list">
                  <DropdownSelectButtonCurrencies id='currencies' items={fixedSiteConfig.currency}></DropdownSelectButtonCurrencies>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="main-nav">
              <div className="header-nav-left h-10">
                <a href="/" className="web-logo nav-logo d-block h-full">
                  {
                    (config.logo || fixedSiteConfig.logo) && (<ImageError width={300} height={300} src={config.logo || fixedSiteConfig.logo as string} className="img-fluid h-100 lazyload object-contain" alt={config?.description_1 || "Honey net"} />)
                  }
                </a>
              </div>

              <div className="header-nav-middle">
                <VerticalNavigation initialData={menuData}></VerticalNavigation>
              </div>
              <div className="rightside-box">
                <RightSideMenu hasSupport={false}></RightSideMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderV6